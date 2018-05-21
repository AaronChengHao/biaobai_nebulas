<style scoped>
    p{
        height:100%;
    }

</style>


<template>
    <div>
    <Row>
        <Col offset="2" span="20">
        <div>
            <h1 style="text-align: center;color: white;">星云链 - 表白|墙</h1>
            <br>
            <span style="font-size: 18px;color: white;">&nbsp;&nbsp;&nbsp;&nbsp;--- 在这里勇敢的说出你的心声吧！</span>
        </div>
        <div style="background:rgb(234, 233, 214);padding: 15px;border-radius: 18px;">
            <Row :gutter="16">
                <Col span="8" v-for="item in confessions" :key="item.id" style="margin-bottom: 8px;">
                    <Card :bordered="true">
                        <p  slot="title" style="display: flex;align-items: center;" >
                            <!-- <Avatar style="color: #f56a00;background-color: #fde3cf">T</Avatar> -->
                            <Icon type="android-favorite" size="30" color="rgba(240, 87, 141, 1)"></Icon>
                            &nbsp;&nbsp;
                            <span>To: {{item.to}}</span>
                            <span style="flex-grow: 1;">
                                <span style="float: right;">{{item.pubTime}}</span>
                            </span>
                        </p>
                        <p>
                            <Icon type="chatbubble-working" size="20"></Icon>
                            {{item.content}}
                        </p>
                        <div style="overflow:hidden;padding: 5px;">
                        <p style="float: right;">
                            <Icon type="paper-airplane" size="20"></Icon>
                            &nbsp;&nbsp;<b>来自:{{item.from}}</b></p>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <br>
                <Button  @click="modal1 = true" >
                    <div style="display: flex;align-items: center;">
                    <span>点我</span>&nbsp;
                    <Icon type="ios-paperplane-outline" size="30"></Icon>
                    </div>
                </Button>
                </Col>
                <Modal
                    v-model="modal1"
                    title="提交您的表白噢~~"
                    :loading="loading"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <Form ref="confession" :model="confession" :rules="ruleValidate" :label-width="80">
                        <FormItem label="来自:" prop="from">
                            <Input v-model="confession.from" placeholder="请输入您的昵称"></Input>
                        </FormItem>
                        <FormItem label="发给:" prop="to">
                            <Input v-model="confession.to" placeholder="请输入接受人的昵称"></Input>
                        </FormItem>
                        <FormItem label="内容:" prop="content">
                            <Input v-model="confession.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入内容正文"></Input>
                        </FormItem>
<!--                         <FormItem>
                            <Button type="primary" @click="handleSubmit('confession')">Submit</Button>
                            <Button type="ghost" @click="handleReset('confession')" style="margin-left: 8px">Reset</Button>
                        </FormItem> -->
                    </Form>
                </Modal>
            </Row>
        </div>
        </Col>
    </Row>
    </div>
</template>


<script>
    import NebApi from '@/lib/NebApi.js';
    import tool from '@/lib/tool.js';
    var nebApi = new NebApi();
    export default {
        data () {
            return {
                confessions:[],
                 modal1: false,
                 loading:true,
                // 表白
                confession: {
                    from:'',
                    to:'',
                    content:''
                },
                ruleValidate: {
                    from: [
                        { required: true, message: '来自信息不能为空', trigger: 'blur' }
                    ],
                    to: [
                        { required: true, message: '发送给谁信息不能为空', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '表白内容不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        nebApi.set(this.confession.from,this.confession.to,this.confession.content,tool.curentTime(),() => {
                            this.confessions.push( JSON.parse( JSON.stringify( this.confession)));
                            this.modal1 = false;
                            this.handleReset('confession');
                        });
                    } else {
                        this.$Message.error('Fail!');
                        this.loading = false;
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            ok () {
                return this.handleSubmit('confession');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        },
        created:function(){
            nebApi.getAll((res) => {
                this.confessions = JSON.parse(res.result);
                console.log(res);
            },function(err){
                console.error(err);
            });
        }
    }
</script>
