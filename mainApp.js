// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK

let mapData = {
    amount: ''
};

let defaultContent = '<p style="padding-top:10px;background-color:#ff0000;color:#fff;"><b>Click to update Bonus Claim Information</b></p>';

let saveData = () => {
    console.log('Saving data...');

    mapData.amount = document.getElementById('amount').value;
    mapData.ticket_type = document.getElementById('ticket_type').value;
    mapData.external_promotion = document.getElementById('external_promotion').value;
    mapData.external_promotion_id = document.getElementById('external_promotion_id').value;
    mapData.issuance_period = document.getElementById('issuance_period').value;
    mapData.redemption_period = document.getElementById('redemption_period').value;
    mapData.ticket_text_part_1 = document.getElementById('ticket_text_part_1').value;
    mapData.ticket_text_part_2 = document.getElementById('ticket_text_part_2').value;

    mapData.issuance = document.getElementById('issuance_schedule').checked;
    mapData.monday_i = document.getElementById('monday_i').checked;
    mapData.tuesday_i = document.getElementById('tuesday_i').checked;
    mapData.wednesday_i = document.getElementById('wednesday_i').checked;
    mapData.thursday_i = document.getElementById('thursday_i').checked;
    mapData.friday_i = document.getElementById('friday_i').checked;
    mapData.saturday_i = document.getElementById('saturday_i').checked;
    mapData.sunday_i = document.getElementById('sunday_i').checked;
    mapData.timefrom_i = document.getElementById('timefrom_i').value;
    mapData.timeto_i = document.getElementById('timeto_i').value;

    mapData.redemption = document.getElementById('redemption_schedule').checked;
    mapData.monday_r = document.getElementById('monday_r').checked;
    mapData.tuesday_r = document.getElementById('tuesday_r').checked;
    mapData.wednesday_r = document.getElementById('wednesday_r').checked;
    mapData.thursday_r = document.getElementById('thursday_r').checked;
    mapData.friday_r = document.getElementById('friday_r').checked;
    mapData.saturday_r = document.getElementById('saturday_r').checked;
    mapData.sunday_r = document.getElementById('sunday_r').checked;
    mapData.timefrom_r = document.getElementById('timefrom_r').value;
    mapData.timeto_r = document.getElementById('timeto_r').value;

    mapData.availability = document.getElementById('availability').checked;
    mapData.regions = document.getElementById('regions').value;
    mapData.locations = document.getElementById('locations').value;

    sdk.setData(mapData, (data) => {
        // mapData = data;
        var content = '%%[ ';
        content += 'set @amount = "' + mapData.amount + '" ';
        content += 'set @ticket_type = "' + mapData.ticket_type + '" ';
        content += 'set @external_promotion = "' + mapData.external_promotion + '" ';
        content += 'set @external_promotion_id = "' + mapData.external_promotion_id + '" ';
        content += 'set @issuance_period = "' + mapData.issuance_period + '" ';
        content += 'set @redemption_period = "' + mapData.redemption_period + '" ';
        content += 'set @ticket_text_part_1 = "' + mapData.ticket_text_part_1 + '" ';
        content += 'set @ticket_text_part_2 = "' + mapData.ticket_text_part_2 + '" ';

        if (mapData.issuance == true) {
            content += 'set @timefrom_i = "' + mapData.timefrom_i + '" ';
            content += 'set @timeto_i = "' + mapData.timeto_i + '" ';

            if (mapData.monday_i == true) {
                content += 'set @monday_i = "true" ';
            }
            if (mapData.tuesday_i == true) {
                content += 'set @tuesday_i = "true" ';
            }
            if (mapData.wednesday_i == true) {
                content += 'set @wednesday_i = "true" ';
            }
            if (mapData.thursday_i == true) {
                content += 'set @thursday_i = "true" ';
            }
            if (mapData.friday_i == true) {
                content += 'set @friday_i = "true" ';
            }
            if (mapData.saturday_i == true) {
                content += 'set @saturday_i = "true" ';
            }
            if (mapData.sunday_i == true) {
                content += 'set @sunday_i = "true" ';
            }
        }

        if (mapData.redemption == true) {
            content += 'set @timefrom_r = "' + mapData.timefrom_r + '" ';
            content += 'set @timeto_r = "' + mapData.timeto_r + '" ';
            
            if (mapData.monday_r == true) {
                content += 'set @monday_r = "true" ';
            }
            if (mapData.tuesday_r == true) {
                content += 'set @tuesday_r = "true" ';
            }
            if (mapData.wednesday_r == true) {
                content += 'set @wednesday_r = "true" ';
            }
            if (mapData.thursday_r == true) {
                content += 'set @thursday_r = "true" ';
            }
            if (mapData.friday_r == true) {
                content += 'set @friday_r = "true" ';
            }
            if (mapData.saturday_r == true) {
                content += 'set @saturday_r = "true" ';
            }
            if (mapData.sunday_r == true) {
                content += 'set @sunday_r = "true" ';
            }
        }

        if (mapData.availability == true) {
            content += 'set @availability_regions = "' + mapData.regions + '" ';
            content += 'set @availability_locations = "' + mapData.locations + '" ';
        }



        content += ']%%';

        /*`%%[set @Description = 'test' set @Name = 'test2']%%
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
</tr>`*/
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
            document.getElementById('ticket_type').value = mapData.ticket_type;
            document.getElementById('external_promotion').value = mapData.external_promotion;
            document.getElementById('external_promotion_id').value = mapData.external_promotion_id;
            document.getElementById('issuance_period').value = mapData.issuance_period;
            document.getElementById('redemption_period').value = mapData.redemption_period;
            document.getElementById('ticket_text_part_1').value = mapData.ticket_text_part_1;
            document.getElementById('ticket_text_part_2').value = mapData.ticket_text_part_2;

            document.getElementById('issuance_schedule').checked = mapData.issuance;
            document.getElementById('monday_i').checked = mapData.monday_i;
            document.getElementById('tuesday_i').checked = mapData.tuesday_i;
            document.getElementById('wednesday_i').checked = mapData.wednesday_i;
            document.getElementById('thursday_i').checked = mapData.thursday_i;
            document.getElementById('friday_i').checked = mapData.friday_i;
            document.getElementById('saturday_i').checked = mapData.saturday_i;
            document.getElementById('sunday_i').checked = mapData.sunday_i;
            document.getElementById('timefrom_i').value = mapData.timefrom_i;
            document.getElementById('timeto_i').value = mapData.timeto_i;

            document.getElementById('redemption_schedule').checked = mapData.redemption;
            document.getElementById('monday_r').checked = mapData.monday_r;
            document.getElementById('tuesday_r').checked = mapData.tuesday_r;
            document.getElementById('wednesday_r').checked = mapData.wednesday_r;
            document.getElementById('thursday_r').checked = mapData.thursday_r;
            document.getElementById('friday_r').checked = mapData.friday_r;
            document.getElementById('saturday_r').checked = mapData.saturday_r;
            document.getElementById('sunday_r').checked = mapData.sunday_r;
            document.getElementById('timefrom_r').value = mapData.timefrom_r;
            document.getElementById('timeto_r').value = mapData.timeto_r;

            document.getElementById('availability').checked = mapData.availability;
            document.getElementById('regions').value = mapData.regions;
            document.getElementById('locations').value = mapData.locations;

            console.log('Found data!');
        }
    });

    console.log(JSON.stringify(mapData));
}

window.onload = fetchData;
window.onchange = saveData;