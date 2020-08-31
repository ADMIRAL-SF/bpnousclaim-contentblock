// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK

/*sdk.getContent(function (content) {
content += '.';
sdk.setContent(content, function (setContent) {
// block content is now its original content + '.'
});
});*/



let mapData = {
    amount: ''
};

let defaultContent = '<p style="padding-top:10px;background-color:#ff0000;color:#fff;"><b>DEFAULT</b></p>';

let saveData = () => {
    console.log('Saving data...');

    mapData.amount = document.getElementById('amount').value;

    sdk.setData(mapData, (data) => {
        // mapData = data;
        let content = '<p style="padding:10px;background-color:#00ff00;color:#fff;">%%[ ';
        content += 'set @amount = '+ mapData.amount;
        content += ']%%</p>';/*`%%[set @Description = 'test' set @Name = 'test2']%%
<tr>
  <td align="center" valign="top" >
    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <!-- added padding here -->
        <td class="content_padding" style="padding : 0px 0px 0px 0px; ">
          <!-- end of comment -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr> <!-- top slot -->
              <td align="center" class="header" valign="top">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                      <tr>
                        <td align="left" valign="top">
                          <table cellspacing="0" cellpadding="0" style="width:100%">
                            <tbody>
                            <tr>
                              <td class="responsive-td" valign="top" style="width: 100%;">
                                <table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="slot-styling"><tr><td style="padding: 0px 15px; " class="slot-styling camarker-inner"><table cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 10px; " class="stylingblock-content-wrapper camarker-inner"><table cellspacing="0" cellpadding="0" style="width: 100%;"><tr><td><table cellspacing="0" cellpadding="0" style="width: 100%;"><tr><td valign="top" class="responsive-td" style="width: 50%; padding-right: 5px;"><table cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><img src="%%=v(@Image)=%%" width="850" style="display: block; padding: 0px; text-align: center; border: 0px solid transparent; height: auto; width: 100%;"></td></tr></table></td></tr></table></td><td valign="top" class="responsive-td" style="width: 50%; padding-left: 5px;"><table cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><b>%%=v(@Name)=%%</b><br>
<i>%%=v(@Description)=%% </i><br>
<br>
<br>
<span style="font-size:18px;"><b>%%=v(@Price)=%% €</b></span><br>
&nbsp;</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 0px 0px 20px; " class="stylingblock-content-wrapper camarker-inner"><table align="left" bgcolor="#00a1f4" border="0" cellpadding="0" cellspacing="0">
 
  <tr>
   <td style="font-family: Arial; font-size: 16px; line-height: 19px; color: #ffffff; text-align:center; font-weight:normal; ">
    <a alias="" conversion="false" data-linkto="other" href="%%=v(@Link)=%%" style="color:#ffffff;text-decoration:none;font-family: Arial; font-size: 16px; line-height: 19px; text-align:center; font-weight:normal; background-color: #00a1f4;border: 10px solid #00a1f4;display: block; white-space: nowrap; " target="_blank" title="">Get them now</a></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>`*/;
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