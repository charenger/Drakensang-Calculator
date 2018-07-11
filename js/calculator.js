$(document).ready(function () {

    const damage = {
        character_damage: 0,
        amulet_damage: 0,
        cloak_damage: 0,
        belt_damage: 0,
        ring_f_damage: 0,
        ring_s_damage: 0,
        andornment_damage: 0,
        helmet_damage: 0,
        pouldrons_damage: 0,
        torso_damage: 0,
        gloves_damage: 0,
        boots_damage: 0,
        set_bonus_f_damage: 0,
        set_bonus_s_damage: 0,
        set_bonus_t_damage: 0,
        essence_damage: 0,
        pet_damage: 0,
        buff_damage: 0
    };

    const increase_damage_on_item = {
        belt_increase_damage_on_item: 0,
        weapon_increase_damage_on_item: 0,
        gloves_increase_damage_on_item: 0,
        boots_increase_damage_on_item: 0,
        dragan_increase_damage_on_item: 0,
        behemoth_increase_damage_on_item: 0,
        ring_f_increase_damage_on_item: 0,
        ring_s_increase_damage_on_item: 0
    };

    const increase_damage = {
        belt_increase_damage: 0,
        ring_f_increase_damage: 0,
        ring_s_increase_damage: 0,
        andornment_increase_damage: 0,
        weapon_increase_damage: 0,
        helmet_increase_damage: 0,
        pouldrons_increase_damage: 0,
        torso_increase_damage: 0,
        wisdom_increase_damage: 0,
        max_damage_set_bonus_increase_damage: 0,
        pet_increase_damage: 0,
        buff_increase_damage: 0
    };

    const andornment = {
        andornment_min_damage: 0,
        andornment_max_damage: 0
    };

    const weapon = {
        weapon_min_damage: 0,
        weapon_max_damage: 0
    };

    const ruby = {
        andornment_ruby: 0,
        weapon_ruby: 0
    };

    const critical_rate = {
        amulet_critical_rate: 0,
        cloak_critical_rate: 0,
        ring_f_critical_rate: 0,
        ring_s_critical_rate: 0,
        helmet_critical_rate: 0,
        boots_critical_rate: 0,
        set_bonus_f_critical_rate: 0,
        set_bonus_s_critical_rate: 0,
        pet_critical_rate: 0
    };

    const critical_base = {
        belt_critical_base: 0,
        ring_f_critical_base: 0,
        ring_s_critical_base: 0,
        andornment_critical_base: 0,
        weapon_critical_base: 0,
        offhand_critical_base: 0,
        set_bonus_f_critical_base: 0,
        set_bonus_s_critical_base: 0,
        pet_critical_base: 0
    };

    const critical_rate_on_item = {
        andornment_critical_rate_on_item: 0,
        offhand_critical_rate_on_item: 0
    };

    const onyx = {
        andornment_onyx: 0,
        weapon_onyx: 0
    };

    function all_critical_rate() {
        var nr = critical_rate.amulet_critical_rate + critical_rate.cloak_critical_rate + critical_rate.ring_f_critical_rate + critical_rate.ring_s_critical_rate + critical_rate.helmet_critical_rate + critical_rate.boots_critical_rate + critical_rate.set_bonus_f_critical_rate + critical_rate.set_bonus_s_critical_rate + critical_rate.pet_critical_rate;
        return nr;
    };

    function andornment_val() {
        var nr = (critical_base.andornment_critical_base + onyx.andornment_onyx) * critical_rate_on_item.andornment_critical_rate_on_item / 100 + (critical_base.andornment_critical_base + onyx.andornment_onyx);
        return nr;
    };

    function offhand_val() {
        var nr = critical_base.offhand_critical_base * critical_rate_on_item.offhand_critical_rate_on_item / 100 + critical_base.offhand_critical_base
        return nr;
    };

    function all_cr_val(andornment, offhand) {
        var nr = critical_base.belt_critical_base + critical_base.ring_f_critical_base + critical_base.ring_s_critical_base + andornment + critical_base.weapon_critical_base + offhand + onyx.weapon_onyx + critical_base.set_bonus_f_critical_base + critical_base.set_bonus_s_critical_base + critical_base.pet_critical_base;
        return nr;
    };

    function cr_percent_val(all, all_cr) {
        var nr = (all * all_cr / 100 + all) / 200;
        return nr;
    };

    function cr_val(all, all_cr) {
        var nr = (all * all_cr / 100 + all);
        parseInt(nr);
        return nr;
    }

    function parse(item, type){
        var nr = parseFloat(document.getElementById(item + type).value);
        isNaN(nr) && (nr = 0);
        return nr;
    }

    function crit() {

        // CRITICAL RATE
        critical_rate.amulet_critical_rate = parse("amulet", "_critical_rate");
        critical_rate.cloak_critical_rate = parse("cloak", "_critical_rate");
        critical_rate.ring_f_critical_rate = parse("ring_f", "_critical_rate");
        critical_rate.ring_s_critical_rate = parse("ring_s", "_critical_rate");
        critical_rate.helmet_critical_rate = parse("helmet", "_critical_rate");
        critical_rate.boots_critical_rate = parse("boots", "_critical_rate");
        critical_rate.set_bonus_f_critical_rate = parse("set_bonus_f", "_critical_rate");
        critical_rate.set_bonus_s_critical_rate = parse("set_bonus_s", "_critical_rate");
        critical_rate.pet_critical_rate = parse("pet", "_critical_rate");

        // CRITICAL BASE
        critical_base.belt_critical_base = parse("belt", "_critical_base");
        critical_base.ring_f_critical_base = parse("ring_f", "_critical_base");
        critical_base.ring_s_critical_base = parse("ring_s", "_critical_base");
        critical_base.andornment_critical_base = parse("andornment", "_critical_base");
        critical_base.weapon_critical_base = parse("weapon", "_critical_base");
        critical_base.offhand_critical_base = parse("offhand", "_critical_base");
        critical_base.set_bonus_f_critical_base = parse("set_bonus_f", "_critical_base");
        critical_base.set_bonus_s_critical_base = parse("set_bonus_s", "_critical_base");
        critical_base.pet_critical_base = parse("pet", "_critical_base");

        // CRITICAL RATE ON ITEM
        critical_rate_on_item.andornment_critical_rate_on_item = parse("andornment", "_critical_rate_on_item");
        critical_rate_on_item.offhand_critical_rate_on_item = parse("offhand", "_critical_rate_on_item");

        // ONYX
        onyx.andornment_onyx = parse("andornment", "_onyx");
        onyx.weapon_onyx = parse("weapon", "_onyx");

        // CALCULATE
        var all_cr = all_critical_rate();
        var andornment = andornment_val();
        var offhand = offhand_val();
        var all = all_cr_val(andornment, offhand);
        var percent = cr_percent_val(all, all_cr);
        var fatal = parseFloat(percent).toFixed(2);
        var value = cr_val(all, all_cr);
        var inf_o = parseFloat(value / 240.08).toFixed(2);
        var inf_tw = parseFloat(value / 280.08).toFixed(2);
        var inf_th = parseFloat(value / 320).toFixed(2);

        // WRITE INTO DOM
        document.getElementById("critical_rate_val").value = value, fatal > 80 && (fatal = 80);
        document.getElementById("critical_rate").value = fatal, inf_o > 80 && (inf_o = 80);
        document.getElementById("critical_rate_inf1").value = inf_o, inf_tw > 80 && (inf_tw = 80);
        document.getElementById("critical_rate_inf2").value = inf_tw, inf_th > 80 && (inf_th = 80);
        document.getElementById("critical_rate_inf3").value = inf_th;
        
        // CONSOLE LOG
        console.clear();
        console.log("CRITICAL RATE: ");
        console.log(critical_rate);
        console.log("CRITICAL BASE: ");
        console.log(critical_base);
        console.log("CRITICAL RATE ON ITEM: ");
        console.log(critical_rate_on_item);
        console.log("ONYX: ");
        console.log(onyx);

    };

    $("#calcCR").click(function () {

        crit();

    });
    
    $("#calculate_damage").click(function (){
       
        damage_calc();        
        
    });
    
    function character(){
        clas = document.getElementsByName("character");
            if(clas[0].checked) damage.character_damage = 468;
            else if(clas[1].checked) damage.character_damage = 360;
            else if(clas[2].checked) damage.character_damage = 425;
            else damage.character_damage = 425;
    }

    function damage_calc(){
        var type = document.getElementsByName("weapon_type");
        character();
        // BASE DAMAGE
        //damage.character_damage = parse("character", "_damage");
        damage.amulet_damage = parse("amulet", "_damage");
        damage.cloak_damage = parse("cloak", "_damage");
        damage.belt_damage = parse("belt", "_damage");
        damage.ring_f_damage = parse("ring_f", "_damage");
        damage.ring_s_damage = parse("ring_s", "_damage");
        damage.andornment_damage = parse("andornment", "_damage");
        damage.helmet_damage = parse("helmet", "_damage");
        damage.pouldrons_damage = parse("pouldrons", "_damage");
        damage.torso_damage = parse("torso", "_damage");
        damage.gloves_damage = parse("gloves", "_damage");
        damage.boots_damage = parse("boots", "_damage");
        damage.set_bonus_f_damage = parse("set_bonus_f", "_damage");
        damage.set_bonus_s_damage = parse("set_bonus_s", "_damage");
        damage.set_bonus_t_damage = parse("set_bonus_t", "_damage");
        damage.essence_damage = parse("essence", "_damage");
        damage.pet_damage = parse("pet", "_damage");
        damage.buff_damage = parse("buff", "_damage");
        // INCREASE DAMAGE ON ITEM
        increase_damage_on_item.belt_increase_damage_on_item = parse("belt", "_increase_damage_on_item");
        increase_damage_on_item.weapon_increase_damage_on_item = parse("weapon", "_increase_damage_on_item");
        increase_damage_on_item.gloves_increase_damage_on_item = parse("gloves", "_increase_damage_on_item");
        increase_damage_on_item.boots_increase_damage_on_item = parse("boots", "_increase_damage_on_item");
        increase_damage_on_item.dragan_increase_damage_on_item = parse("dragan", "_increase_damage_on_item");
        increase_damage_on_item.behemoth_increase_damage_on_item = parse("behemoth", "_increase_damage_on_item");
        increase_damage_on_item.ring_f_increase_damage_on_item = parse("ring_f", "_increase_damage_on_item");
        increase_damage_on_item.ring_s_increase_damage_on_item = parse("ring_s", "_increase_damage_on_item");
        // INCREASE DAMAGE
        increase_damage.belt_increase_damage = parse("belt", "_increase_damage");
        increase_damage.ring_f_increase_damage = parse("ring_f", "_increase_damage");
        increase_damage.ring_s_increase_damage = parse("ring_s", "_increase_damage");
        increase_damage.andornment_increase_damage = parse("andornment", "_increase_damage");
        increase_damage.weapon_increase_damage = parse("weapon", "_increase_damage");
        increase_damage.helmet_increase_damage = parse("helmet", "_increase_damage");
        increase_damage.pouldrons_increase_damage = parse("pouldrons", "_increase_damage");
        increase_damage.torso_increase_damage = parse("torso", "_increase_damage");
        increase_damage.wisdom_increase_damage = parse("wisdom", "_increase_damage");
        increase_damage.max_damage_set_bonus_increase_damage = parse("max_damage_set_bonus", "_increase_damage");
        increase_damage.pet_increase_damage = parse("pet", "_increase_damage");
        increase_damage.buff_increase_damage = parse("buff", "_increase_damage");
        // WEAPON
        weapon.weapon_min_damage = parse("weapon", "_min_damage");
        weapon.weapon_max_damage = parse("weapon", "_max_damage");
        // ANDORNMENT
        andornment.andornment_min_damage = parse("andornment", "_min_damage");
        andornment.andornment_max_damage = parse("andornment", "_max_damage");
        // RUBY
        ruby.andornment_ruby = parse("andornment", "_ruby");
        ruby.weapon_ruby = parse("weapon", "_ruby");
        
        // CALCULATE
        var ring_f_dmg = damage.ring_f_damage + damage.ring_f_damage * increase_damage_on_item.ring_f_increase_damage_on_item / 100;
        var ring_s_dmg = damage.ring_s_damage + damage.ring_s_damage * increase_damage_on_item.ring_s_increase_damage_on_item / 100;
        var belt_dmg = damage.belt_damage + damage.belt_damage * increase_damage_on_item.belt_increase_damage_on_item / 100;
        var gloves_dmg = damage.gloves_damage + damage.gloves_damage * increase_damage_on_item.gloves_increase_damage_on_item / 100;
        var boots_dmg = damage.boots_damage + damage.boots_damage * increase_damage_on_item.boots_increase_damage_on_item / 100;
        var total_dmg = damage.character_damage + damage.amulet_damage + damage.cloak_damage + damage.andornment_damage + damage.helmet_damage + damage.pouldrons_damage + damage.torso_damage + damage.set_bonus_f_damage + damage.set_bonus_s_damage + damage.set_bonus_t_damage + damage.pet_damage + damage.buff_damage + ruby.andornment_ruby + ring_f_dmg + ring_s_dmg + belt_dmg + gloves_dmg + boots_dmg;
        var total_id = increase_damage.belt_increase_damage + increase_damage.ring_f_increase_damage + increase_damage.ring_s_increase_damage + increase_damage.andornment_increase_damage + increase_damage.weapon_increase_damage + increase_damage.helmet_increase_damage + increase_damage.pouldrons_increase_damage + increase_damage.torso_increase_damage + increase_damage.wisdom_increase_damage + increase_damage.pet_increase_damage + increase_damage.buff_increase_damage;
        var max_id = total_id + increase_damage.max_damage_set_bonus_increase_damage;
        
        // MIN DMG
        
        var weapon_min_dmg = weapon.weapon_min_damage + ruby.weapon_ruby;
        var weapon_min_idoi = weapon_min_dmg * increase_damage_on_item.weapon_increase_damage_on_item / 100 + weapon_min_dmg;
        if (type[0].checked){
            var min_dmg = weapon_min_idoi + weapon_min_idoi * increase_damage_on_item.behemoth_increase_damage_on_item / 100 + weapon_min_idoi * (increase_damage_on_item.dragan_increase_damage_on_item + 100) / 100 + total_dmg + andornment.andornment_min_damage;
        }
        else{
            var min_dmg = weapon_min_idoi + weapon_min_idoi * increase_damage_on_item.behemoth_increase_damage_on_item / 100 + weapon_min_idoi * increase_damage_on_item.dragan_increase_damage_on_item / 100 + total_dmg + andornment.andornment_min_damage;
        }
        var min_id = min_dmg + min_dmg * total_id / 100;
        var min_green_ess = min_dmg + damage.essence_damage + (min_dmg + damage.essence_damage) * total_id / 100;
        var min_blue_ess = 2 * min_dmg + min_dmg * total_id / 100;
        var min_pink_ess = 3 * min_dmg + min_dmg * total_id / 100;
        var min_red_ess = 4 * min_dmg + min_dmg * total_id / 100;
        
        // MAX DMG
        
        var weapon_max_dmg = weapon.weapon_max_damage + ruby.weapon_ruby;
        var weapon_max_idoi = weapon_max_dmg * increase_damage_on_item.weapon_increase_damage_on_item / 100 + weapon_max_dmg;
        if (type[0].checked){
            var max_dmg = weapon_max_idoi + weapon_max_idoi * increase_damage_on_item.behemoth_increase_damage_on_item / 100 + weapon_max_idoi * (increase_damage_on_item.dragan_increase_damage_on_item + 100) / 100 + total_dmg + andornment.andornment_max_damage;
        }
        else{
            var max_dmg = weapon_max_idoi + weapon_max_idoi * increase_damage_on_item.behemoth_increase_damage_on_item / 100 + weapon_max_idoi * increase_damage_on_item.dragan_increase_damage_on_item / 100 + total_dmg + andornment.andornment_max_damage;
        }
        var max_id_ne = max_dmg + max_dmg * max_id / 100;
        var max_green_ess = max_dmg + damage.essence_damage + (max_dmg + damage.essence_damage) * max_id / 100;
        var max_blue_ess = 2 * max_dmg + max_dmg * max_id / 100;
        var max_pink_ess = 3 * max_dmg + max_dmg * max_id / 100;
        var max_red_ess = 4 * max_dmg + max_dmg * max_id / 100;
                
        // OUTPUT
        
        document.getElementById("min_no_ess").value = parseInt(min_id),
        document.getElementById("max_no_ess").value = parseInt(max_id_ne),
        document.getElementById("min_green_ess").value = parseInt(min_green_ess),
        document.getElementById("max_green_ess").value = parseInt(max_green_ess),
        document.getElementById("min_blue_ess").value = parseInt(min_blue_ess),
        document.getElementById("max_blue_ess").value = parseInt(max_blue_ess),
        document.getElementById("min_purple_ess").value = parseInt(min_pink_ess),
        document.getElementById("max_purple_ess").value = parseInt(max_pink_ess),
        document.getElementById("min_red_ess").value = parseInt(min_red_ess),
        document.getElementById("max_red_ess").value = parseInt(max_red_ess);
        
        // CONSOLE LOG
        console.clear();
        console.log("DAMAGE: ");
        console.log(damage);
        console.log("INCREASE DAMAGE ON ITEM: ");
        console.log(increase_damage_on_item);
        console.log("INCREASE DAMAGE: ");
        console.log(increase_damage);
        console.log("WEAPON: ");
        console.log(weapon);
        console.log("ANDORNMENT: ");
        console.log(andornment);
        console.log("RUBY: ");
        console.log(ruby);
        console.log("TOTAL DAMAGE: ");
        console.log(total_dmg);
        console.log("TOTAL INCRESE DAMAGE: ");
        console.log(total_id);
        console.log("WEAPON MIN DAMAGE");
        console.log(weapon_min_dmg);
        console.log("WEAPON MAX DAMAGE");
        console.log(weapon_max_dmg);
        
    };
    
});
