<?php
    /**
     * 对象
        * 类 class
     */

    class Person{
        // 成员属性（实例属性）
        public $name;
        var $age = 18;

        // 构造函数：在初始化时执行
        function __construct($name,$age,$gender){
            $this->name = $name;
            $this->age = $age;
            $this->gender = $gender;
        }
        
        //成员方法
        public function setName($name){
            $this->name = $name;
        }

        function getAge(){
            return $this->age;
        }

        private function setAge($age){
            $this->age = $age;
        }
    }

    class Student extends Person{

    }


    $xiaoxie = new Person('xiaoxie',28,'女');
    var_dump($xiaoxie);

    // 修改
    $xiaoxie->setName('谢冬零');
    echo $xiaoxie->name;
    // $xiaoxie->setAge(28); // 报错，不能调用受保护的和私有方法

    var_dump($xiaoxie);

    echo json_encode($xiaoxie,JSON_UNESCAPED_UNICODE)
?>