function NebApi (){
    this.myContactAddress = "n1aWnYnbEVByu9nERtysFfjXReFEeYxJKzQ";
    this.dappContactAddress = "n1ozNe8Dh8Y5Efh5bdCNWjzXsFJRRMXHzqN";
    // console.log(window);
    window.nebulas = window.require("nebulas");
    window.Account = window.nebulas.Account;
    this.neb = new window.nebulas.Neb();
    this.neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));

    var NebPay = window.require("nebpay");     //https://github.com/nebulasio/nebPay
    this.nebPay = new NebPay();
    console.log(this.nebPay);
};

NebApi.prototype.set = function(from,to,content,pubTime,callback){
    var dappContactAddress = this.dappContactAddress;
    var value = "0";
    var nonce = "0";
    var gas_price = "1000000";
    var gas_limit = "2000000";
    var callFunction = "set";
    var callArgs = `["${from}","${to}","${content}","${pubTime}"]`;
    var contract = {
        "function":callFunction,
        "args":  callArgs
    };

    serialNumber = this.nebPay.call(dappContactAddress, value, callFunction, callArgs, {    //使用nebpay的call接口去调用合约,
        listener: callback //设置listener, 处理交易返回信息
    });

    // alert(321);
    // intervalQuery = setInterval(function () {
    //     funcIntervalQuery();
    // }, 5000);
    // console.log(2222,serialNumber,intervalQuery,2222);


// function funcIntervalQuery() {
//     alert('funcIntervalQuery');
//     nebPay.queryPayInfo(serialNumber)   //search transaction result from server (result upload to server by app)
//         .then(function (resp) {
//             console.log("tx result: " + resp)   //resp is a JSON string
//             var respObject = JSON.parse(resp)
//             if(respObject.code === 0){
//                 alert(`set ${$("#search_value").val()} succeed!`)
//                 clearInterval(intervalQuery)
//             }
//         })
//         .catch(function (err) {
//             alert(321);
//             console.log(err);
//         });
// }

// function cbPush(resp) {
//     console.log("response of push: " + JSON.stringify(resp))
// }



}

NebApi.prototype.getAll = function(then,reject){
    var from = this.myContactAddress;
    var dappContactAddress = this.dappContactAddress;
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

    var _this = this;

    this.neb.api.call(from,dappContactAddress,value,nonce,gas_price,gas_limit,contract).then(then).catch(reject);
}

export default NebApi;
