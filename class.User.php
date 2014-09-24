<?php
/*

 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created 2009
 Refurbished: 22 September 2014 10:35:46 BST, Nottingham, UK


 Version 2.0
*/


class User  {


	private $groups_read=false;
	private $rights_read=false;


	function User($a1='id',$a2=false,$a3=false) {
		global $mysqli;
		$this->mysqli=$mysqli;
		$this->table_name='User';
		$this->id=false;
		$this->ignore_fields=array(
			'User Key',
			'User Last Login'
		);

		if (($a1=='new'  )and is_array($a2)) {
			$this->find($a2,'create');
			return;
		}

		if (($a1=='find'  )and is_array($a2)) {
			$this->find($a2,$a3);
			return;
		}


		if (is_numeric($a1) and !$a2) {
			$_data= $a1;
			$key='id';
		} else {
			$_data= $a2;
			$key=$a1;
		}

		$this->get_data($key,$_data,$a3);
		return;
	}
function base_data() {


		$data=array();
		$sql="SHOW COLUMNS FROM `".$this->table_name." Dimension`";
		$res = $this->mysqli->query($sql);
		while($row=$res->fetch_assoc()){
		if (!in_array($row['Field'],$this->ignore_fields))
					$data[$row['Field']]=$row['Default'];
		}
		
	
		
		return $data;
	}

	function find($raw_data,$options='') {
	
	$this->found=false;
	
		if (isset($raw_data['editor'])) {
			foreach ($raw_data['editor'] as $key=>$value) {

				if (array_key_exists($key,$this->editor))
					$this->editor[$key]=$value;

			}
		}

		$create=false;
		$update=false;

		if (preg_match('/create/i',$options)) {
			$create='create';
		}
		if (preg_match('/update/i',$options)) {
			$update='update';
		}



		$data=$this->base_data();
		foreach ($raw_data as $key=>$value) {
			if (array_key_exists($key,$data)) {
				$data[$key]=trim($value);
			}
		}

		if ($data['User Type']=='Customer') {
			$where_site=sprintf(" and `User Site Key`=%d",$data['User Site Key']);
		}else {
			$where_site='';
		}

		$sql=sprintf("select `User Key` from `User Dimension` where `User Type`=%s and `User Handle`=%s ",
			
			prepare_mysql($data['User Type']),
			
			prepare_mysql($data['User Handle'])
			
		);

		//print $sql;

		$res=$this->mysqli->query($sql);
		if ($row=$res->fetch_assoc()) {
			$this->found=true;
			$this->found_key=$row['User Key'];

		}





		if ($this->found) {
			$this->get_data('id',$this->found_key);

		}

		if (!$this->found and $create) {
			$this->create($raw_data);
		}


	}

	function create($data) {
	
	

		$this->new=false;
		$this->msg='Unknown Error (0)';
		$base_data=$this->base_data();

		foreach ($data as $key=>$value) {
			if (array_key_exists($key,$base_data))
				$base_data[$key]=trim($value);
		}

	

		if ($base_data['User Created']=='')
			$base_data['User Created']=gmdate("Y-m-d H:i:s");

		if ($base_data['User Handle']=='') {
			$this->msg=_('Wrong handle');
			return;
		}
		if (strlen($base_data['User Handle'])<4) {
			$this->msg='Handle to short';
			return;
		}



		$sql=sprintf("select count(*) as numh  from `User Dimension` where `User Type`=%s and `User Handle`=%s ",
			prepare_mysql($base_data['User Type']),
			prepare_mysql($base_data['User Handle'])
		);
		// print $sql;
		$result = $this->mysqli->query($sql) ;
		if ($row = $result->fetch_assoc()) {
			if ($row['numh']>0) {
				$this->error=true;
				$this->msg= _('The user')." ".$base_data['User Handle']." is already in the database!";
			return;

		}
	} else {
		$this->error=true;
		$this->msg= _('Unknown error');
		return;

	}




	$keys='(';
	$values='values(';
	foreach ($base_data as $key=>$value) {
		$keys.="`$key`,";
		if ($key=='User Inactive Note')
		$values.=prepare_mysql($value,false).",";
		else
			$values.=prepare_mysql($value).",";
	}
	$keys=preg_replace('/,$/',')',$keys);
	$values=preg_replace('/,$/',')',$values);
	$sql=sprintf("insert into `User Dimension` %s %s",$keys,$values);
	//print $sql;
	if ($this->mysqli->query($sql)) {

		$user_id=$this->mysqli->insert_id;

		$this->new=true;
		$this->msg= 'User added susesfully';
		$this->get_data('id',$user_id);
	



		return;
	} else {
		$this->error=true;
		$this->msg= _('Unknown error').' (2)';
		return;
	}

	$this->get_data('id',$user_id);



}


function get_data($key,$data,$data2='Staff') {
	global $_group;
	if ($key=='handle')
	$sql=sprintf("select * from  `User Dimension` where `User Handle`=%s and `User Type`=%s"
		,prepare_mysql($data)
		,prepare_mysql($data2)
	);


	else
		$sql=sprintf("select * from `User Dimension` where `User Key`=%d",$data);

	$result=$this->mysqli->query($sql);
	if ($this->data=$result->fetch_assoc()) {
		$this->id=$this->data['User Key'];
		$this->data['User Password']='';




	}


}







function get($key) {

	//print $key;

	if (array_key_exists($key,$this->data))
	return $this->data[$key];

	switch ($key) {
	case('Login Count'):
	case('Failed Login Count'):
		return number($this->data['User '.$key]);
		break;

	case('Created '):
	case('Last Failed Login'):
	case('Last Login'):
		if ($this->data ['User '.$key]=='' or $this->data ['User '.$key]=='0000-00-00 00:00:00')
		return '';
		else
			return strftime( "%e %b %Y %H:%M %Z", strtotime( $this->data ['User '.$key]." +00:00" ) );
		break;
	case('User Pasword'):
		return "******";

	}

}


function log_request($url,$prev) {




	global $session;
	$sql=sprintf("insert into `User Request Dimension` (`User Key`,`Session Key`,`Date`,`URL`,`Previous URL`,`IP`,`OS`,`Browser`) values (%d,%d,%s,%s,%s,%s,%s,%s)",
		$this->id,
		$session->data['Session Key'],
		prepare_mysql(gmdate('Y-m-d H:i:s')),
		prepare_mysql($url),
		prepare_mysql($prev),
		prepare_mysql(ip()),
		prepare_mysql(get_user_os($_SERVER['HTTP_USER_AGENT'])),
		prepare_mysql(get_user_browser($_SERVER['HTTP_USER_AGENT']))


	);

	$this->mysqli->query($sql);
	$this->update_request_data();

}



function update_request_data() {

	$number_requests=0;
	$number_sessions=0;
	$last_request='';

	$sql=sprintf("select count(*) as num_request, count(distinct `User Key`) as num_sessions , max(`Date`) as date from `User Request Dimension` where  `User Key`=%d",$this->id);
	$res=$this->mysqli->query($sql);
	if ($row=$res->fetch_assoc()) {

		$number_requests=$row['num_request'];
		$number_sessions=$row['num_sessions'];
		$last_request=$row['date'];

	}


	$sql=sprintf("update `User Dimension` set `User Requests Count`=%d,`User Sessions Count`=%d, `User Last Request`=%s where `User Key`=%d  "     ,
		$number_requests,
		$number_sessions,
		prepare_mysql($last_request),

		$this->id
	);
	$this->mysqli->query($sql);
	



}




}

?>
