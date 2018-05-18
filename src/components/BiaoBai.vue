<style scoped>
    p{
        height:100%;
    }

</style>


<template>
    <div>
    <Row>
        <Col offset="4" span="16">
        <h1>BiaoBai-Qiang</h1>
        <div class="demo-avatar">
            <Avatar icon="person" />
            <Avatar>U</Avatar>
            <Avatar>USER</Avatar>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
            <Avatar style="background-color: #87d068" icon="person" size="large"/>
        </div>
        <div style="background:#eee;padding: 20px">
            <Row :gutter="16">
                <Col span="8">
                    <Card :bordered="false">
                        <p slot="title"><Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>&nbsp;&nbsp;To Zhang</p>
                        <p>I Love You!!!!. Content of no border type. </p>
                    </Card>
                </Col>
                <Col span="8">
                    <Card :bordered="false">
                        <p slot="title"><Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>&nbsp;&nbsp;To Zhang</p>
                        <p>I Love You!!!!. Content of no border type. </p>
                    </Card>
                </Col>
                <Col span="8">
                    <Card :bordered="false">
                        <p slot="title"><Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>&nbsp;&nbsp;To Zhang</p>
                        <p>I Love You!!!!. Content of no border type. </p>
                    </Card>
                </Col>

            </Row>
        </div>
    <br>
    <br>
    <br>
    <Row>
        <Col offset="2" span="12">
            <Form ref="confession" :model="confession" :rules="ruleValidate" :label-width="80">
                <FormItem label="From" prop="from">
                    <Input v-model="confession.from" placeholder="Enter your from"></Input>
                </FormItem>
                <FormItem label="To" prop="to">
                    <Input v-model="confession.to" placeholder="Enter your to"></Input>
                </FormItem>
                <FormItem label="Content" prop="content">
                    <Input v-model="confession.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('confession')">Submit</Button>
                    <Button type="ghost" @click="handleReset('confession')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </Col>
    </Row>

        </Col>
    </Row>


    </div>
</template>


<script>
    export default {
        data () {
            return {
                // 表白
                confession: {
                    from:'',
                    to:'',
                    content:''
                },
                ruleValidate: {
                    from: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    to: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ]
                //     mail: [
                //         { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                //         { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                //     ],
                //     city: [
                //         { required: true, message: 'Please select the city', trigger: 'change' }
                //     ],
                //     gender: [
                //         { required: true, message: 'Please select gender', trigger: 'change' }
                //     ],
                //     interest: [
                //         { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                //         { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                //     ],
                //     date: [
                //         { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                //     ],
                //     time: [
                //         { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                //     ],
                //     desc: [
                //         { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                //         { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                //     ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
                console.log(this.confession.from);
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        created:function(){
            var dappContactAddress = "n1qqjGRCjGHQrY4tWWSzVkXkVNg4H9KiMTV";
            var myContactAddress = "n1aWnYnbEVByu9nERtysFfjXReFEeYxJKzQ";
            var nebulas = window.require("nebulas"),
                Account = nebulas.Account,
                neb = new nebulas.Neb();
            neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"));


            var from = myContactAddress;
            var value = "0";
            var nonce = "0";
            var gas_price = "1000000";
            var gas_limit = "2000000";
            var callFunction = "getAll";
            var callArgs = '[]';
            var contract = {
                "function":callFunction,
                "args":callArgs
            };

            neb.api.call(from,dappContactAddress,value,nonce,gas_price,gas_limit,contract).then(function(resp){
                console.log(resp);
            }).catch(function(err){
                console.log(err);
            });



            console.log(from);
        }
    }
</script>
