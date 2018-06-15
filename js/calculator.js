$(document).ready(function () {
    $("#calcCR").click(function () {
        for (var e = ["amulet_critical_rate", "cloak_critical_rate", "ring_f_critical_rate", "ring_s_critical_rate", "helmet_critical_rate", "boots_critical_rate", "set_bonus_f_critical_rate", "set_bonus_s_critical_rate", "pet_critical_rate"], a = ["belt_critical_base", "ring_f_critical_base", "ring_s_critical_base", "andornment_critical_base", "weapon_critical_base", "offhand_critical_base", "set_bonus_f_critical_base", "set_bonus_s_critical_base", "pet_critical_base"], t = ["andornment_critical_rate_on_item", "offhand_critical_rate_on_item"], n = ["andornment_onyx", "weapon_onyx"], m = 0; m < 9; m++) e[m] = parseFloat(document.getElementById("" + e[m]).value), isNaN(e[m]) && (e[m] = 0);
        for (m = 0; m < 9; m++) a[m] = parseFloat(document.getElementById("" + a[m]).value), isNaN(a[m]) && (a[m] = 0);
        for (m = 0; m < 2; m++) t[m] = parseFloat(document.getElementById("" + t[m]).value), isNaN(t[m]) && (t[m] = 0);
        for (m = 0; m < 2; m++) n[m] = parseFloat(document.getElementById("" + n[m]).value), isNaN(n[m]) && (n[m] = 0);
        var d = 0;
        for (m = 0; m < 9; m++) d += e[m];
        var _ = (a[3] + n[0]) * t[0] / 100 + (a[3] + n[0]),
            c = a[5] * t[1] / 100 + a[5],
            r = a[0] + a[1] + a[2] + a[4] + _ + c + n[1] + a[6] + a[7] + a[8],
            i = (e = r * d / 100 + r) / 200,
            l = parseFloat(i).toFixed(2),
            o = parseInt(e = r * d / 100 + r),
            g = parseFloat(o / 240.08).toFixed(2),
            s = parseFloat(o / 280.08).toFixed(2),
            u = parseFloat(o / 320).toFixed(2);
        document.getElementById("critical_rate_val").value = o, l > 80 && (l = 80),
        document.getElementById("critical_rate").value = l, g > 80 && (g = 80),
        document.getElementById("critical_rate_inf1").value = g, s > 80 && (s = 80),
        document.getElementById("critical_rate_inf2").value = s, u > 80 && (u = 80),
        document.getElementById("critical_rate_inf3").value = u
    }), $("#calculate_damage").click(function () {
                
        var e = ["character_damage", "amulet_damage", "cloak_damage", "belt_damage", "ring_f_damage", "ring_s_damage", "andornment_damage", "helmet_damage", "pouldrons_damage", "torso_damage", "glove_damage", "boots_damage", "set_bonus_f_damage", "set_bonus_s_damage", "set_bonus_t_damage", "essence_damage", "pet_damage", "buff_damage"],
            a = ["belt_increase_damage_on_item", "weapon_increase_damage_on_item", "glove_increase_damage_on_item", "boots_increase_damage_on_item", "dragan_increase_damage_on_item", "behemoth_increase_damage_on_item"],
            t = ["belt_increase_damage", "ring_f_increase_damage", "ring_s_increase_damage", "andornment_increase_damage", "weapon_increase_damage", "helmet_increase_damage", "pouldrons_increase_damage", "torso_increase_damage", "wisdom_increase_damage", "max_damage_set_bonus_increase_damage", "pet_increase_damage", "buff_increase_damage"],
            n = ["andornment_min_damage", "andornment_max_damage"],
            m = ["weapon_min_damage", "weapon_max_damage"],
            d = ["andornment_ruby", "weapon_ruby"];
        for (_ = 1; _ < 18; _++) e[_] = parseFloat(document.getElementById("" + e[_]).value), isNaN(e[_]) && (e[_] = 0);
        for (_ = 0; _ < 6; _++) a[_] = parseFloat(document.getElementById("" + a[_]).value), isNaN(a[_]) && (a[_] = 0);
        for (_ = 0; _ < 12; _++) t[_] = parseFloat(document.getElementById("" + t[_]).value), isNaN(t[_]) && (t[_] = 0);
        for (_ = 0; _ < 2; _++) n[_] = parseFloat(document.getElementById("" + n[_]).value), isNaN(n[_]) && (n[_] = 0);
        for (_ = 0; _ < 2; _++) m[_] = parseFloat(document.getElementById("" + m[_]).value), isNaN(m[_]) && (m[_] = 0);
        for (_ = 0; _ < 2; _++) d[_] = parseFloat(document.getElementById("" + d[_]).value), isNaN(d[_]) && (d[_] = 0);
        var clas = document.getElementsByName("character");
            if(clas[0].checked) e[0] = 468;
            else if(clas[1].checked) e[0] = 360;
            else if(clas[2].checked) e[0] = 425;
            else e[0] = 425;
        var c = e[3] + e[3] * a[0] / 100,
            r = e[10] + e[10] * a[2] / 100,
            i = e[11] + e[11] * a[3] / 100,
            l = e[0] + e[1] + e[2] + c + e[4] + e[5] + e[6] + d[0] + e[7] + e[8] + e[9] + r + i + e[12] + e[13] + e[14] + e[16] + e[17],
            o = t[0] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[10] + t[11],
            g = o + t[9],
            s = m[0] + d[1],
            u = s * a[1] / 100 + s;
        var type = document.getElementsByName("weapon_type");
        if (type[0].checked) {
            var y = u + u * a[5] / 100 + u * (a[4] + 100) / 100 + l + n[0];
        } else {
            var y = u + u * a[5] / 100 + u * a[4] / 100 + l + n[0];
        }
        var v = y + y * o / 100,
            I = y + e[15] + (y + e[15]) * o / 100,
            E = 2 * y + y * o / 100,
            B = 3 * y + y * o / 100,
            p = 4 * y + y * o / 100,
            b = m[1] + d[1],
            f = b * a[1] / 100 + b;
        if (type[0].checked) {
            var w = f + f * a[5] / 100 + f * (a[4] + 100) / 100 + l + n[1];
        } else {
            var w = f + f * a[5] / 100 + f * a[4] / 100 + l + n[1];
        }
        var x = w + w * g / 100,
            N = w + e[15] + (w + e[15]) * g / 100,
            F = 2 * w + w * g / 100,
            h = 3 * w + w * g / 100,
            k = 4 * w + w * g / 100;





        var R = parseFloat(document.getElementById("critical_rate").value);
        isNaN(R) && (R = 0);
        var L = parseFloat(document.getElementById("critical_damage").value);
        isNaN(L) && (L = 100);
        var T = parseFloat(document.getElementById("attack_speed").value);
        isNaN(T) && (T = 1, document.getElementById("attack_speed").value = "1.0");
        var C = (1 + R / 100 * L / 100) * T;
        document.getElementById("min_no_ess").value = parseInt(v),
        document.getElementById("max_no_ess").value = parseInt(x),
        document.getElementById("min_green_ess").value = parseInt(I),
        document.getElementById("max_green_ess").value = parseInt(N),
        document.getElementById("min_blue_ess").value = parseInt(E),
        document.getElementById("max_blue_ess").value = parseInt(F),
        document.getElementById("min_purple_ess").value = parseInt(B),
        document.getElementById("max_purple_ess").value = parseInt(h),
        document.getElementById("min_red_ess").value = parseInt(p),
        document.getElementById("max_red_ess").value = parseInt(k);
        var A = (v + (x - v) / 2) / 2;
        document.getElementById("dpi_ne").value = parseFloat(2 * A * C).toFixed(2)
    })
});





var damage = ["character_damage", "amulet_damage", "cloak_damage", "belt_damage", "ring_f_damage", "ring_s_damage", "andornment_damage", "helmet_damage", "pouldrons_damage", "torso_damage", "glove_damage", "boots_damage", "set_bonus_f_damage", "set_bonus_s_damage", "set_bonus_t_damage", "essence_damage", "pet_damage", "buff_damage"],
    increase_damage_on_item = ["belt_increase_damage_on_item", "weapon_increase_damage_on_item", "glove_increase_damage_on_item", "boots_increase_damage_on_item", "dragan_increase_damage_on_item", "behemoth_increase_damage_on_item"],
    increase_damage = ["belt_increase_damage", "ring_f_increase_damage", "ring_s_increase_damage", "andornment_increase_damage", "weapon_increase_damage", "helmet_increase_damage", "pouldrons_increase_damage", "torso_increase_damage", "wisdom_increase_damage", "max_damage_set_bonus_increase_damage", "pet_increase_damage", "buff_increase_damage"],
    adornment = ["andornment_min_damage", "andornment_max_damage"],
    weapon = ["weapon_min_damage", "weapon_max_damage"],
    ruby = ["andornment_ruby", "weapon_ruby"],
    critical_rate = ["amulet_critical_rate", "cloak_critical_rate", "ring_f_critical_rate", "ring_s_critical_rate", "helmet_critical_rate", "boots_critical_rate", "set_bonus_f_critical_rate", "set_bonus_s_critical_rate", "pet_critical_rate"],
    critical_base = ["belt_critical_base", "ring_f_critical_base", "ring_s_critical_base", "andornment_critical_base", "weapon_critical_base", "offhand_critical_base", "set_bonus_f_critical_base", "set_bonus_s_critical_base", "pet_critical_base"],
    critical_rate_on_item = ["andornment_critical_rate_on_item", "offhand_critical_rate_on_item"],
    onyx = ["andornment_onyx", "weapon_onyx"];
var type = document.getElementsByName("weapon_type");

function myFunction() {
    for (var e = 1; e < 18; e++) damage[e] = parseFloat(document.getElementById("" + damage[e]).value), isNaN(damage[e]) && (damage[e] = 0);
    for (e = 0; e < 6; e++) increase_damage_on_item[e] = parseFloat(document.getElementById("" + increase_damage_on_item[e]).value), isNaN(increase_damage_on_item[e]) && (increase_damage_on_item[e] = 0);
    for (e = 0; e < 12; e++) increase_damage[e] = parseFloat(document.getElementById("" + increase_damage[e]).value), isNaN(increase_damage[e]) && (increase_damage[e] = 0);
    for (e = 0; e < 2; e++) adornment[e] = parseFloat(document.getElementById("" + adornment[e]).value), isNaN(adornment[e]) && (adornment[e] = 0);
    for (e = 0; e < 2; e++) weapon[e] = parseFloat(document.getElementById("" + weapon[e]).value), isNaN(weapon[e]) && (weapon[e] = 0);
    for (e = 0; e < 2; e++) ruby[e] = parseFloat(document.getElementById("" + ruby[e]).value), isNaN(ruby[e]) && (ruby[e] = 0);
    var a = damage[3] + damage[3] * increase_damage_on_item[0] / 100,
        t = damage[10] + damage[10] * increase_damage_on_item[2] / 100,
        n = damage[11] + damage[11] * increase_damage_on_item[3] / 100,
        m = damage[0] + damage[1] + damage[2] + a + damage[4] + damage[5] + damage[6] + ruby[0] + damage[7] + damage[8] + damage[9] + t + n + damage[12] + damage[13] + damage[14] + damage[16] + damage[17],
        d = increase_damage[0] + increase_damage[3] + increase_damage[4] + increase_damage[5] + increase_damage[6] + increase_damage[7] + increase_damage[8] + increase_damage[10] + increase_damage[11],
        _ = d + increase_damage[9],
        c = weapon[0] + ruby[1],
        r = c * increase_damage_on_item[1] / 100 + c;
    if (type[0].checked) {
        var i = r + r * increase_damage_on_item[5] / 100 + r * (increase_damage_on_item[4] + 100) / 100 + m + adornment[0];
    } else {
        var i = r + r * increase_damage_on_item[5] / 100 + r * increase_damage_on_item[4] / 100 + m + adornment[0];
    }
    var l = i + i * d / 100,
        o = i + damage[15] + (i + damage[15]) * d / 100,
        g = 2 * i + i * d / 100,
        s = 3 * i + i * d / 100,
        u = 4 * i + i * d / 100,
        y = weapon[1] + ruby[1],
        v = y * increase_damage_on_item[1] / 100 + y;
    if (type[0].checked) {
        var I = v + v * increase_damage_on_item[5] / 100 + v * (increase_damage_on_item[4] + 100) / 100 + m + adornment[1];
    } else {
        var I = v + v * increase_damage_on_item[5] / 100 + v * increase_damage_on_item[4] / 100 + m + adornment[1];
    }
    var E = I + I * _ / 100,
        B = I + damage[15] + (I + damage[15]) * _ / 100,
        p = 2 * I + I * _ / 100,
        b = 3 * I + I * _ / 100,
        f = 4 * I + I * _ / 100,
        w = parseFloat(document.getElementById("critical_rate").value);
    isNaN(w) && (w = 0);
    var x = parseFloat(document.getElementById("critical_damage").value);
    isNaN(x) && (x = 100);
    var N = parseFloat(document.getElementById("attack_speed").value);
    isNaN(N) && (N = 1, document.getElementById("attack_speed").value = "1.0");
    var F = (1 + w / 100 * x / 100) * N;
    document.getElementById("min no ess do").value = parseInt(l), document.getElementById("max no ess do").value = parseInt(E), document.getElementById("min green ess do").value = parseInt(o), document.getElementById("max green ess do").value = parseInt(B), document.getElementById("min blue ess do").value = parseInt(g), document.getElementById("max blue ess do").value = parseInt(p), document.getElementById("min purple ess do").value = parseInt(s), document.getElementById("max purple ess do").value = parseInt(b), document.getElementById("min red ess do").value = parseInt(u), document.getElementById("max red ess do").value = parseInt(f);
    var h = (l + (E - l) / 2) / 2;
    document.getElementById("dpi no ess do").value = parseFloat(2 * h * F).toFixed(2)
}

function save_text_as_file() {
    var e = writeData(),
        a = new Blob([e], {
            type: "text/plain"
        }),
        t = window.URL.createObjectURL(a),
        n = document.getElementById("inputFileNameToSaveAs").value,
        m = document.createElement("a");
    m.download = n, m.innerHTML = "Download File", m.href = t, m.onclick = destroyClickedElement, m.style.display = "none", document.body.appendChild(m), m.click()
}

function destroyClickedElement(e) {
    document.body.removeChild(e.target)
}

function loadFileAsText() {
    var e = document.getElementById("fileToLoad").files[0],
        a = new FileReader;
    a.onload = function (e) {
        var a = e.target.result.split("\n");
        a.pop();
        for (var t = 0; t < a.length; t++) readLine(a[t]);
        myFunction()
    }, a.readAsText(e, "UTF-8")
}

function writeData() {
    var e = damage[1] + "=" +
    document.getElementById("" + damage[1]).value + "\n" + damage[2] + "=" +
    document.getElementById("" + damage[2]).value + "\n" + damage[3] + "=" +
    document.getElementById("" + damage[3]).value + "\n" + damage[4] + "=" +
    document.getElementById("" + damage[3]).value + "\n" + damage[5] + "=" +
    document.getElementById("" + damage[3]).value + "\n" + damage[6] + "=" +
    document.getElementById("" + damage[3]).value + "\n" + damage[7] + "=" +
    document.getElementById("" + damage[7]).value + "\n" + damage[8] + "=" +
    document.getElementById("" + damage[8]).value + "\n" + damage[9] + "=" +
    document.getElementById("" + damage[9]).value + "\n" + damage[10] + "=" +
    document.getElementById("" + damage[10]).value + "\n" + damage[11] + "=" +
    document.getElementById("" + damage[11]).value + "\n" + damage[12] + "=" +
    document.getElementById("" + damage[12]).value + "\n" + damage[13] + "=" +
    document.getElementById("" + damage[13]).value + "\n" + damage[14] + "=" +
    document.getElementById("" + damage[14]).value + "\n" + damage[15] + "=" +
    document.getElementById("" + damage[15]).value + "\n" + damage[16] + "=" +
    document.getElementById("" + damage[16]).value + "\n" + damage[17] + "=" +
    document.getElementById("" + damage[17]).value + "\n" + increase_damage_on_item[0] + "=" +
    document.getElementById("" + increase_damage_on_item[0]).value + "\n" + increase_damage_on_item[1] + "=" +
    document.getElementById("" + increase_damage_on_item[1]).value + "\n" + increase_damage_on_item[2] + "=" +
    document.getElementById("" + increase_damage_on_item[2]).value + "\n" + increase_damage_on_item[3] + "=" +
    document.getElementById("" + increase_damage_on_item[3]).value + "\n" + increase_damage_on_item[4] + "=" +
    document.getElementById("" + increase_damage_on_item[4]).value + "\n" + increase_damage_on_item[5] + "=" +
    document.getElementById("" + increase_damage_on_item[5]).value + "\n" + increase_damage[0] + "=" +
    document.getElementById("" + increase_damage[0]).value + "\n" + increase_damage[1] + "=" +
    document.getElementById("" + increase_damage[1]).value + "\n" + increase_damage[2] + "=" +
    document.getElementById("" + increase_damage[2]).value + "\n" + increase_damage[3] + "=" +
    document.getElementById("" + increase_damage[3]).value + "\n" + increase_damage[4] + "=" +
    document.getElementById("" + increase_damage[4]).value + "\n" + increase_damage[5] + "=" +
    document.getElementById("" + increase_damage[5]).value + "\n" + increase_damage[6] + "=" +
    document.getElementById("" + increase_damage[6]).value + "\n" + increase_damage[7] + "=" +
    document.getElementById("" + increase_damage[7]).value + "\n" + increase_damage[8] + "=" +
    document.getElementById("" + increase_damage[8]).value + "\n" + increase_damage[9] + "=" +
    document.getElementById("" + increase_damage[9]).value + "\n" + increase_damage[10] + "=" +
    document.getElementById("" + increase_damage[10]).value + "\n" + increase_damage[11] + "=" +
    document.getElementById("" + increase_damage[11]).value + "\n" + adornment[0] + "=" +
    document.getElementById("" + adornment[0]).value + "\n" + adornment[1] + "=" +
    document.getElementById("" + adornment[1]).value + "\n" + weapon[0] + "=" +
    document.getElementById("" + weapon[0]).value + "\n" + weapon[1] + "=" +
    document.getElementById("" + weapon[1]).value + "\n" + ruby[0] + "=" +
    document.getElementById("" + ruby[0]).value + "\n" + ruby[1] + "=" +
    document.getElementById("" + ruby[1]).value + "\n" + critical_rate[0] + "=" +
    document.getElementById("" + critical_rate[0]).value + "\n" + critical_rate[1] + "=" +
    document.getElementById("" + critical_rate[1]).value + "\n" + critical_rate[2] + "=" +
    document.getElementById("" + critical_rate[2]).value + "\n" + critical_rate[3] + "=" +
    document.getElementById("" + critical_rate[3]).value + "\n" + critical_rate[4] + "=" +
    document.getElementById("" + critical_rate[4]).value + "\n" + critical_rate[5] + "=" +
    document.getElementById("" + critical_rate[5]).value + "\n" + critical_rate[6] + "=" +
    document.getElementById("" + critical_rate[6]).value + "\n" + critical_rate[7] + "=" +
    document.getElementById("" + critical_rate[7]).value + "\n" + critical_rate[8] + "=" +
    document.getElementById("" + critical_rate[8]).value + "\n" + critical_base[0] + "=" +
    document.getElementById("" + critical_base[0]).value + "\n" + critical_base[1] + "=" +
    document.getElementById("" + critical_base[1]).value + "\n" + critical_base[2] + "=" +
    document.getElementById("" + critical_base[2]).value + "\n" + critical_base[3] + "=" +
    document.getElementById("" + critical_base[3]).value + "\n" + critical_base[4] + "=" +
    document.getElementById("" + critical_base[4]).value + "\n" + critical_base[5] + "=" +
    document.getElementById("" + critical_base[5]).value + "\n" + critical_base[6] + "=" +
    document.getElementById("" + critical_base[6]).value + "\n" + critical_base[7] + "=" +
    document.getElementById("" + critical_base[7]).value + "\n" + critical_base[8] + "=" +
    document.getElementById("" + critical_base[8]).value + "\n" + critical_rate_on_item[0] + "=" +
    document.getElementById("" + critical_rate_on_item[0]).value + "\n" + critical_rate_on_item[1] +
    "=" + document.getElementById("" + critical_rate_on_item[1]).value + "\n" + onyx[0] + "=" +
    document.getElementById("" + onyx[0]).value + "\n" + onyx[1] + "=" + document.getElementById("" + onyx[1]).value + "\n";
    return console.log(e), e
}

function readLine(e) {
    for (var a = e.split("="), t = 1; t < 18; t++) a[0].match(new RegExp("" + damage[t])) && (document.getElementById("" + damage[t]).value = a[1]);
    for (t = 0; t < 6; t++) a[0].match(new RegExp("" + increase_damage_on_item[t])) && (document.getElementById("" + increase_damage_on_item[t]).value = a[1]);
    for (t = 0; t < 12; t++) a[0].match(new RegExp("" + increase_damage[t])) && (document.getElementById("" + increase_damage[t]).value = a[1]);
    for (t = 0; t < 2; t++) a[0].match(new RegExp("" + adornment[t])) && (document.getElementById("" + adornment[t]).value = a[1]);
    for (t = 0; t < 2; t++) a[0].match(new RegExp("" + weapon[t])) && (document.getElementById("" + weapon[t]).value = a[1]);
    for (t = 0; t < 2; t++) a[0].match(new RegExp("" + ruby[t])) && (document.getElementById("" + ruby[t]).value = a[1]);
    for (t = 0; t < 9; t++) a[0].match(new RegExp("" + critical_rate[t])) && (document.getElementById("" + critical_rate[t]).value = a[1]);
    for (t = 0; t < 9; t++) a[0].match(new RegExp("" + critical_base[t])) && (document.getElementById("" + critical_base[t]).value = a[1]);
    for (t = 0; t < 2; t++) a[0].match(new RegExp("" + critical_rate_on_item[t])) && (document.getElementById("" + critical_rate_on_item[t]).value = a[1]);
    for (t = 0; t < 2; t++) a[0].match(new RegExp("" + onyx[t])) && (document.getElementById("" + onyx[t]).value = a[1])
}
