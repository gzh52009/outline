(()=>{
    let username = 'laoxie';

    let content = `hello my name is ${username}`;

    class Person{
        init(){
            console.log('init')
        }
        static say(){
            return 'hi'
        }
    }

    const p = new Person();
})();