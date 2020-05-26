$(document).ready(function(){
    var weapons = [
        {
            "name" : "44_pistol",
            "damage" :48,
            "fire_rate" :6,
            "range" : 119,
            "accuracy" : 66,
            "weight" : 4.2,
            "value" : 99

        },
        {
            "name" : "10mm_pistol",
            "damage" :18,
            "fire_rate" :16,
            "range" : 119,
            "accuracy" : 46,
            "weight" : 2.2,
            "value" : 342

        },
        {
            "name" : "assault_riffle",
            "damage" :98,
            "fire_rate" :60,
            "range" : 119,
            "accuracy" : 90,
            "weight" : 14.2,
            "value" : 230

        }
    ];

    $('.item-list a').on('mouseenter', function (e) {
            var current_item = $(e.currentTarget).attr('class');

            for(item in weapons)
            {
                if(weapons[item].name == current_item)
                {
                    var container = $('.item-stats');
                    container.find('.damage').html(weapons[item].damage);
                    container.find('.fire_rate').html(weapons[item].fire_rate);
                    container.find('.accuracy').html(weapons[item].accuracy);
                    container.find('.range').html(weapons[item].range);
                    container.find('.weight').html(weapons[item].weight);
                    container.find('.value').html(weapons[item].value);
                }
            }
        });
});