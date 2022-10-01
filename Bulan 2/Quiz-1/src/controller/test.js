export const segitigaSamaSisi = (req, res) => {

    let { hitung, alas = 1, tinggi = 1 } = req.query;
    hitung = String(hitung);
    alas = parseInt(alas);
    tinggi = parseInt(tinggi);
    let luasnya = alas * tinggi / 2;
    let keliling =  alas * 3;

    if (hitung === 'luas') {
        res.send(`alas : ${alas},tinggi:${tinggi}, luas : ${luasnya}`)
    }
    if (hitung === 'keliling') {
        res.send(`alas : ${alas},tinggi:${tinggi}, keliling : ${keliling}`)
    }
}

export const persegi = (req, res) => {
    let { hitung, sisi=1 } = req.query;
    hitung = String(hitung);
    sisi = parseInt(sisi);
    let luas= sisi*sisi;
    let keliling= 4 * sisi;

    if (hitung === 'luas') {
        res.send(`sisi : ${sisi}, luas : ${luas}`)
    }
    if (hitung === 'keliling') {
        res.send(`sisi : ${sisi}, keliling : ${keliling}`)
    }
}
export const persegiPanjang = (req, res) => {
    let { hitung, panjang = 1, lebar = 1 } = req.query;
    hitung = String(hitung);
    panjang = parseInt(panjang);
    lebar = parseInt(lebar);
    let luas = panjang * lebar;
    let keliling = 2 * (panjang + lebar);

    if (hitung === 'luas') {
        res.send(`panjang : ${panjang}, lebar : ${lebar}, luas : ${luas}`)
    }
    if (hitung === 'keliling') {
        res.send(`panjang : ${panjang}, lebar : ${lebar}, keliling : ${keliling}`)
    }
}
export const lingkaran = (req, res) => {
    let { hitung, jariJari = 1 } = req.query;
    hitung = String(hitung);
    jariJari = parseInt(jariJari);
    let luas = Math.round(Math.PI * jariJari * jariJari)
    let keliling = Math.round(2 * Math.PI * jariJari)

    if (hitung === 'luas') {
        res.send(`jariJari : ${jariJari}, luas : ${luas}`)
    }
    if (hitung === 'keliling') {
        res.send(`jariJari : ${jariJari}, luas : ${keliling}`)
    }
}
export const jajarGenjang = (req, res) => {
    let { hitung, sisi = 1, alas = 1, tinggi = 1 } = req.query;
    hitung = String(hitung);
    sisi = parseInt(sisi);
    alas = parseInt(alas);
    tinggi = parseInt(tinggi);
    let luas = alas * tinggi;
    let keliling = 2*(alas+sisi);

    if (hitung === 'luas') {
        res.send(`alas : ${alas}, tinggi : ${tinggi}, luas : ${luas}`)
    }
    if (hitung === 'keliling') {
        res.send(`alas : ${alas}, sisi : ${sisi}, keliling : ${keliling}`)
    }
}