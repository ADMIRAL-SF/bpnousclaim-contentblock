// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK

let blockData = {
    amount: ''
};

let defaultContent = '<p style="padding-top:10px;background-color:#ff0000;color:#fff;"><b>Click to update Bonus Claim Information</b></p>';

let saveData = () => {
    console.log('Saving data...');

    blockData.amount = document.getElementById('amount').value;
    blockData.ticket_type = document.getElementById('ticket_type').value;
    blockData.external_promotion = document.getElementById('external_promotion').value;
    blockData.external_promotion_id = document.getElementById('external_promotion_id').value;
    blockData.issuance_period = document.getElementById('issuance_period').value;
    blockData.redemption_period = document.getElementById('redemption_period').value;
    blockData.ticket_text_part_1 = document.getElementById('ticket_text_part_1').value;
    blockData.ticket_text_part_2 = document.getElementById('ticket_text_part_2').value;
    blockData.target_de = document.getElementById('target_de').value;

    blockData.issuance = document.getElementById('issuance_schedule').checked;
    blockData.monday_i = document.getElementById('monday_i').checked;
    blockData.tuesday_i = document.getElementById('tuesday_i').checked;
    blockData.wednesday_i = document.getElementById('wednesday_i').checked;
    blockData.thursday_i = document.getElementById('thursday_i').checked;
    blockData.friday_i = document.getElementById('friday_i').checked;
    blockData.saturday_i = document.getElementById('saturday_i').checked;
    blockData.sunday_i = document.getElementById('sunday_i').checked;
    blockData.timefrom_i = document.getElementById('timefrom_i').value;
    blockData.timeto_i = document.getElementById('timeto_i').value;

    blockData.redemption = document.getElementById('redemption_schedule').checked;
    blockData.monday_r = document.getElementById('monday_r').checked;
    blockData.tuesday_r = document.getElementById('tuesday_r').checked;
    blockData.wednesday_r = document.getElementById('wednesday_r').checked;
    blockData.thursday_r = document.getElementById('thursday_r').checked;
    blockData.friday_r = document.getElementById('friday_r').checked;
    blockData.saturday_r = document.getElementById('saturday_r').checked;
    blockData.sunday_r = document.getElementById('sunday_r').checked;
    blockData.timefrom_r = document.getElementById('timefrom_r').value;
    blockData.timeto_r = document.getElementById('timeto_r').value;

    blockData.availability = document.getElementById('availability').checked;
    blockData.regions = document.getElementById('regions').value;
    blockData.locations = document.getElementById('locations').value;

    blockData.multiclaim = document.getElementById('multiclaim').checked;
    blockData.multiclaimlock = document.getElementById('multiclaimlock').value;

    sdk.setData(blockData, (data) => {
        // blockData = data;
        var content = '%%[ ';
        content += 'set @amount = "' + blockData.amount + '" ';
        content += 'set @ticket_type = "' + blockData.ticket_type + '" ';
        content += 'set @external_promotion = "' + blockData.external_promotion + '" ';
        content += 'set @external_promotion_id = "' + blockData.external_promotion_id + '" ';
        content += 'set @issuance_period = "' + blockData.issuance_period + '" ';
        content += 'set @redemption_period = "' + blockData.redemption_period + '" ';
        content += 'set @ticket_text_part_1 = "' + blockData.ticket_text_part_1 + '" ';
        content += 'set @ticket_text_part_2 = "' + blockData.ticket_text_part_2 + '" ';
        content += 'set @targetDE = "' + blockData.target_de + '" ';

        if (blockData.issuance == true) {
            content += 'set @timefrom_i = "' + blockData.timefrom_i + '" ';
            content += 'set @timeto_i = "' + blockData.timeto_i + '" ';

            if (blockData.monday_i == true) {
                content += 'set @monday_i = "true" ';
            }
            if (blockData.tuesday_i == true) {
                content += 'set @tuesday_i = "true" ';
            }
            if (blockData.wednesday_i == true) {
                content += 'set @wednesday_i = "true" ';
            }
            if (blockData.thursday_i == true) {
                content += 'set @thursday_i = "true" ';
            }
            if (blockData.friday_i == true) {
                content += 'set @friday_i = "true" ';
            }
            if (blockData.saturday_i == true) {
                content += 'set @saturday_i = "true" ';
            }
            if (blockData.sunday_i == true) {
                content += 'set @sunday_i = "true" ';
            }
        }

        if (blockData.redemption == true) {
            content += 'set @timefrom_r = "' + blockData.timefrom_r + '" ';
            content += 'set @timeto_r = "' + blockData.timeto_r + '" ';
            
            if (blockData.monday_r == true) {
                content += 'set @monday_r = "true" ';
            }
            if (blockData.tuesday_r == true) {
                content += 'set @tuesday_r = "true" ';
            }
            if (blockData.wednesday_r == true) {
                content += 'set @wednesday_r = "true" ';
            }
            if (blockData.thursday_r == true) {
                content += 'set @thursday_r = "true" ';
            }
            if (blockData.friday_r == true) {
                content += 'set @friday_r = "true" ';
            }
            if (blockData.saturday_r == true) {
                content += 'set @saturday_r = "true" ';
            }
            if (blockData.sunday_r == true) {
                content += 'set @sunday_r = "true" ';
            }
        }

        if (blockData.availability == true) {
            content += 'set @availability_regions = "' + blockData.regions + '" ';
            content += 'set @availability_locations = "' + blockData.locations + '" ';
        }

        if (blockData.multiclaim == true) {
            content += 'set @multiclaim = "' + blockData.multiclaim + '" ';
            content += 'set @multiClaimDuration = "' + blockData.multiclaimlock * -1 + '" ';
        }
        else {
            content += 'set @multiclaim = "false" ';
        }

        content += ']%%';
        let superContent = defaultContent;


        //check for ampscript
         if (content.search('%%') === -1) {
              superContent = content;
          }

        console.log('content: ' + content);

        sdk.setSuperContent(decodeURI(superContent), (newSuperContent) => {});
        sdk.setContent(content);

    });

    console.log(JSON.stringify(blockData));

}

let fetchData = () => {

    console.log('Loading data...');

    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            blockData = data;

            document.getElementById('amount').value = blockData.amount;
            document.getElementById('ticket_type').value = blockData.ticket_type;
            document.getElementById('external_promotion').value = blockData.external_promotion;
            document.getElementById('external_promotion_id').value = blockData.external_promotion_id;
            document.getElementById('issuance_period').value = blockData.issuance_period;
            document.getElementById('redemption_period').value = blockData.redemption_period;
            document.getElementById('ticket_text_part_1').value = blockData.ticket_text_part_1;
            document.getElementById('ticket_text_part_2').value = blockData.ticket_text_part_2;
            document.getElementById('target_de').value = blockData.target_de;

            document.getElementById('issuance_schedule').checked = blockData.issuance;
            document.getElementById('monday_i').checked = blockData.monday_i;
            document.getElementById('tuesday_i').checked = blockData.tuesday_i;
            document.getElementById('wednesday_i').checked = blockData.wednesday_i;
            document.getElementById('thursday_i').checked = blockData.thursday_i;
            document.getElementById('friday_i').checked = blockData.friday_i;
            document.getElementById('saturday_i').checked = blockData.saturday_i;
            document.getElementById('sunday_i').checked = blockData.sunday_i;
            document.getElementById('timefrom_i').value = blockData.timefrom_i;
            document.getElementById('timeto_i').value = blockData.timeto_i;

            document.getElementById('redemption_schedule').checked = blockData.redemption;
            document.getElementById('monday_r').checked = blockData.monday_r;
            document.getElementById('tuesday_r').checked = blockData.tuesday_r;
            document.getElementById('wednesday_r').checked = blockData.wednesday_r;
            document.getElementById('thursday_r').checked = blockData.thursday_r;
            document.getElementById('friday_r').checked = blockData.friday_r;
            document.getElementById('saturday_r').checked = blockData.saturday_r;
            document.getElementById('sunday_r').checked = blockData.sunday_r;
            document.getElementById('timefrom_r').value = blockData.timefrom_r;
            document.getElementById('timeto_r').value = blockData.timeto_r;

            document.getElementById('availability').checked = blockData.availability;
            document.getElementById('regions').value = blockData.regions;
            document.getElementById('locations').value = blockData.locations;

            document.getElementById('multiclaim').checked = blockData.multiclaim;
            document.getElementById('multiclaimlock').value = blockData.multiclaimlock;

            console.log('Found data!');
        }
    });

    console.log(JSON.stringify(blockData));
}

window.onload = fetchData;
window.onchange = saveData;
