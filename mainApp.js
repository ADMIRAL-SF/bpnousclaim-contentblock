// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK



let mapData = {
    amount: ''
};

let defaultContent = 'test';

let saveData = () => {
    console.log('Saving data...');

    mapData.amount = document.getElementById('amount').value;

    sdk.setData(mapData, (data) => {
        // mapData = data;
        let content = mapData.amount;
        let superContent = defaultContent;


        //check for ampscript
        if (content.search('%%') === -1) {
            superContent = content;
        }

        console.log('content: ' + content);

        sdk.setSuperContent(decodeURI(superContent), (newSuperContent) => {});
        sdk.setContent(content);

    });

    console.log(JSON.stringify(mapData));

}

let fetchData = () => {

    console.log('Loading data...');

    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            mapData = data;

            document.getElementById('amount').value = mapData.amount;
            console.log('Found data!');
        }
    });

    console.log(JSON.stringify(mapData));
}

window.onload = fetchData;
window.onchange = saveData;