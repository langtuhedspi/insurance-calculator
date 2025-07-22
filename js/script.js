const r21Table = {
          18: 51200, 19: 54200, 20: 57000, 21: 60200, 22: 65200, 23: 72500,
          24: 80000, 25: 89000, 26: 98500, 27: 108500, 28: 119200, 29: 130200,
          30: 142700, 31: 156200, 32: 174500, 33: 199200, 34: 227200, 35: 258700,
          36: 290900, 37: 308300, 38: 321600, 39: 368700, 40: 422200, 41: 477000,
          42: 529300, 43: 587600, 44: 654500, 45: 731500, 46: 818000, 47: 912800,
          48: 1010700, 49: 1104300, 50: 1190300, 51: 1310600, 52: 1409900, 53: 1481700,
          54: 1559600, 55: 1641700, 56: 1725700, 57: 1848800, 58: 2020100, 59: 2211300,
          60: 2421600, 61: 2648700, 62: 2862300, 63: 3050000, 64: 3242600, 65: 3442600,
          66: 3647700, 67: 3908700, 68: 4203200, 69: 4451900, 70: 4843300, 71: 5295600,
          72: 5666300, 73: 6062900, 74: 6487300
        };

const r23Table = {
          1: 21600, 2: 32400, 3: 43200, 4: 54000, 5: 54000, 6: 54000, 7: 54000,
          8: 54000, 9: 54000, 10: 54000, 11: 54000, 12: 54000, 13: 54000, 14: 54000,
          15: 54000, 16: 54000, 17: 54000, 18: 88200, 19: 88200, 20: 88200, 21: 88200,
          22: 88200, 23: 88200, 24: 88200, 25: 88200, 26: 88200, 27: 88200, 28: 88200,
          29: 88200, 30: 68700, 31: 68700, 32: 68700, 33: 68700, 34: 68700, 35: 68700,
          36: 68700, 37: 68700, 38: 68700, 39: 68700, 40: 83800, 41: 83800, 42: 83800,
          43: 83800, 44: 83800, 45: 83800, 46: 83800, 47: 83800, 48: 83800, 49: 83800,
          50: 112400, 51: 112400, 52: 112400, 53: 112400, 54: 112400, 55: 112400,
          56: 112400, 57: 112400, 58: 112400, 59: 112400, 60: 109800, 61: 109800,
          62: 109800, 63: 109800, 64: 109800, 65: 109800, 66: 109800, 67: 109800,
          68: 109800, 69: 109800
        };

const spkPremiums = {
    1:560000,2:560000,3:560000,4:560000,5:560000,6:560000,7:560000,8:560000,9:560000,10:560000,
    11:560000,12:560000,13:560000,14:560000,15:560000,16:560000,17:560000,18:560000,19:680000,20:680000,
    21:680000,22:680000,23:680000,24:680000,25:680000,26:680000,27:680000,28:680000,29:680000,30:680000,
    31:680000,32:680000,33:680000,34:680000,35:680000,36:680000,37:680000,38:680000,39:680000,40:680000,
    41:980000,42:980000,43:980000,44:980000,45:980000,46:980000,47:980000,48:980000,49:980000,50:980000,
    51:1300000,52:1300000,53:1300000,54:1300000,55:1300000,56:1300000,57:1300000,58:1300000,59:1300000,60:1300000,
    61:1500000,62:1500000,63:1500000,64:1500000,65:1500000
}

const angiaPremiums = {
0: { dong: 0, bac: 0, vang: 0, bachkim: 13648000, kimcuong: 16681000}, 
1: { dong: 2973000, bac: 4264000, vang: 6459000, bachkim: 9099000, kimcuong: 11121000}, 
2: { dong: 2973000, bac: 4264000, vang: 6459000, bachkim: 9099000, kimcuong: 11121000}, 
3: { dong: 2973000, bac: 4264000, vang: 6459000, bachkim: 9099000, kimcuong: 11121000}, 
4: { dong: 1914000, bac: 2746000, vang: 4160000, bachkim: 5616000, kimcuong: 6864000}, 
5: { dong: 1914000, bac: 2746000, vang: 4160000, bachkim: 5616000, kimcuong: 6864000}, 
6: { dong: 1914000, bac: 2746000, vang: 4160000, bachkim: 5616000, kimcuong: 6864000}, 
7: { dong: 1615000, bac: 2317000, vang: 3510000, bachkim: 4739000, kimcuong: 5792000}, 
8: { dong: 1615000, bac: 2317000, vang: 3510000, bachkim: 4739000, kimcuong: 5792000}, 
9: { dong: 1615000, bac: 2317000, vang: 3510000, bachkim: 4739000, kimcuong: 5792000}, 
10: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
11: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
12: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
13: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
14: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
15: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
16: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
17: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
18: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
19: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
20: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
21: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
22: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
23: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
24: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
25: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
26: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
27: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
28: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
29: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
30: { dong: 1445000, bac: 2073000, vang: 3140000, bachkim: 4423000, kimcuong: 5460000}, 
31: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
32: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
33: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
34: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
35: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
36: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
37: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
38: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
39: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
40: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
41: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
42: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
43: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
44: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
45: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
46: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
47: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
48: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
49: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
50: { dong: 1582000, bac: 2270000, vang: 3439000, bachkim: 4844000, kimcuong: 5921000}, 
51: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
52: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
53: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
54: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
55: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
56: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
57: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
58: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
59: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
60: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
61: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
62: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
63: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
64: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}, 
65: { dong: 1866000, bac: 2677000, vang: 4056000, bachkim: 5704000, kimcuong: 6972000}
};

const tambinhPremiums = {
0: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
1: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
2: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
3: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
4: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
5: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
6: { coban: 863000, morong: 1510000, nangcao: 1972000, toandien: 2414000, uuviet: 3198000}, 
7: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
8: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
9: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
10: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
11: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
12: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
13: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
14: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
15: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
16: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
17: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
18: { coban: 535000, morong: 936000, nangcao: 1301000, toandien: 1593000, uuviet: 2111000}, 
19: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
20: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
21: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
22: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
23: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
24: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
25: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
26: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
27: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
28: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
29: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
30: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
31: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
32: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
33: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
34: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
35: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
36: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
37: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
38: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
39: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
40: { coban: 584000, morong: 1021000, nangcao: 1420000, toandien: 1738000, uuviet: 2303000}, 
41: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
42: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
43: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
44: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
45: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
46: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
47: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
48: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
49: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
50: { coban: 486000, morong: 851000, nangcao: 1183000, toandien: 1448000, uuviet: 1919000}, 
51: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
52: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
53: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
54: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
55: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
56: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
57: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
58: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
59: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
60: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
61: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
62: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
63: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
64: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}, 
65: { coban: 596000, morong: 1042000, nangcao: 1449000, toandien: 1774000, uuviet: 2350000}
}

const rateR22 = { 1: 1, 2: 1.3, 3: 1.9, 4: 2.5 };
const rateR23 = { 1: 1, 2: 1.3, 3: 1.9, 4: 2.5, 5: 3.5 };

function calculatePremiumR21(age, amount, years) {
          let total = 0;
          for (let i = 0; i < years; i++) {
            const fee = r21Table[age + i];
            if (fee) total += fee;
          }
          return (total * amount) / 100000000;
        }

function calculatePremiumR22(group, amount, years) {
          if (group === 5 || group === 6) return null;
          const rate = rateR22[group];
          //if (!rate) return null;
          return (102000 * years * rate * amount) / 200000000;
        }

function calculatePremiumR23(age, group, amount, years) {
          if (group === 6) return null;
          const rate = rateR23[group];
          //if (!rate) return null;
          let total = 0;
          for (let i = 0; i < years; i++) {
            const fee = r23Table[age + i];
            if (fee) total += fee;
          }
          return (total * amount * rate) / 100000000;
        }

function calculatePremiumAnGia(age, rank, years) {
    let total = 0;
    if (age === 0) {
        if (rank === 'dong' || rank === 'bac' || rank === 'vang') {
            return null;
        }
    }
    for (let i = 0; i < years; i++) {
        const fee = angiaPremiums[age + i]?.[rank] ?? 0
        if (fee) total += fee;
    }
    return total;
}

function calculatePremiumTamBinh(age, program, years) {
    let total = 0;
    for (let i = 0; i < years; i++) {
        const fee = tambinhPremiums[age + i]?.[program] ?? 0
        if (fee) total += fee;
    }
    return total;
}

function calculatePremiumSpk(age, years) {
    let total = 0;
    for (let i = 0; i < years; i++) {
        const fee = spkPremiums[age + i];
        if (fee) total += fee;
    }
    return total;
}

function calculateTotal() {
    const age = parseInt(document.getElementById("age").value);
    const group = parseInt(document.getElementById("jobGroup").value);
    //const r21Amount = parseInt(document.getElementById("r21_amount").value);
    const r21Years = parseInt(document.getElementById("r21_years").value);
    //const r22Amount = parseInt(document.getElementById("r22_amount").value);
    const r22Years = parseInt(document.getElementById("r22_years").value);
    //const r23Amount = parseInt(document.getElementById("r23_amount").value);
    const r23Years = parseInt(document.getElementById("r23_years").value);
    const r21Amount = getNumberValue("r21_amount");
    const r22Amount = getNumberValue("r22_amount");
    const r23Amount = getNumberValue("r23_amount");
    const angiaProgram = document.getElementById("angia_program").value; 
    const angiaYears = parseInt(document.getElementById("angia_years").value);
    const tambinhProgram = document.getElementById("tambinh_program").value; 
    const tambinhYears = parseInt(document.getElementById("tambinh_years").value);
    const spkYears = parseInt(document.getElementById("spk_years").value);      

    // R21
    let r21Total = 0;
    if (age < 18 || age > 74) {
        document.getElementById("r21_total").innerText = "#";
        document.getElementById("r21_note").innerText = "※ Độ tuổi không được bảo hiểm";
    } else if (!r21Amount || !r21Years) {
        document.getElementById("r21_total").innerText = "#";
        document.getElementById("r21_note").innerText = "";
    } else {
        document.getElementById("r21_note").innerText = "";
        r21Total = calculatePremiumR21(age, r21Amount, r21Years);
        document.getElementById("r21_total").innerText = r21Total.toLocaleString();
    }

    // R22
    const r22Total = calculatePremiumR22(group, r22Amount, r22Years);
    if (r22Total === null) {
        document.getElementById("r22_total").innerText = "#";
        document.getElementById("r22_note").innerText = "※ Nhóm nghề không được bảo hiểm";
    } else if (!r22Amount || !r22Years) {
        document.getElementById("r22_total").innerText = "#";
        document.getElementById("r22_note").innerText = "";
    } else {
        document.getElementById("r22_note").innerText = "";
        document.getElementById("r22_total").innerText = r22Total.toLocaleString();
    }

    // R23
    const r23Total = calculatePremiumR23(age, group, r23Amount, r23Years);
    if (r23Total === null) {
        document.getElementById("r23_total").innerText = "#";
        document.getElementById("r23_note").innerText = "※ Nhóm nghề không được bảo hiểm";
    } else if (!r23Amount || !r23Years) {
        document.getElementById("r23_total").innerText = "#";
        document.getElementById("r23_note").innerText = "";
    } else {
        document.getElementById("r23_note").innerText = "";
        document.getElementById("r23_total").innerText = r23Total.toLocaleString();
    }

    // An Gia
    const angiaTotal = calculatePremiumAnGia(age, angiaProgram, angiaYears)
    if (angiaTotal === null) {
        document.getElementById("angia_total").innerText = "#";
        document.getElementById("angia_note").innerText = "※ Độ tuổi không được bảo hiểm";
    } else if (angiaTotal === 0) {
        document.getElementById("angia_total").innerText = "#";
        document.getElementById("angia_note").innerText = "";
    } else {
        document.getElementById("angia_note").innerText = "";
        document.getElementById("angia_total").innerText = angiaTotal.toLocaleString();
    }

    // Tam Binh
    const tambinhTotal = calculatePremiumTamBinh(age, tambinhProgram, tambinhYears)
    if (tambinhTotal == 0) {
        document.getElementById("tambinh_total").innerText = "#";
        document.getElementById("tambinh_note").innerText = "";
    } else {
        document.getElementById("tambinh_note").innerText = "";
        document.getElementById("tambinh_total").innerText = tambinhTotal.toLocaleString();
    }

    // San pham khac
    const spkTotal = calculatePremiumSpk(age, spkYears);
    if (spkTotal == 0) {
        document.getElementById("spk_total").innerText = "#";
        document.getElementById("spk_note").innerText = "";
    } else {
        document.getElementById("spk_note").innerText = "";
        document.getElementById("spk_total").innerText = spkTotal.toLocaleString();
    }

    const total = (r21Total || 0) + (r22Total || 0) + (r23Total || 0) + angiaTotal + tambinhTotal + spkTotal;
    document.getElementById("total").innerText = total.toLocaleString();
}

document.querySelectorAll(".amount-input").forEach((el) => {
          el.addEventListener("input", (e) => {
          const cursorPos = el.selectionStart;
          const raw = el.value.replace(/,/g, "").replace(/\D/g, "");
          const formatted = Number(raw).toLocaleString("en-US");
          el.value = formatted;

          // Cập nhật lại vị trí con trỏ
          const diff = formatted.length - raw.length;
          el.setSelectionRange(cursorPos + diff, cursorPos + diff);

          //calculateTotal(); // Gọi lại hàm tính
        });
        });

document.getElementById("angia_program").addEventListener("change", calculateTotal);
document.getElementById("tambinh_program").addEventListener("change", calculateTotal);

// Hàm tiện ích để lấy giá trị số từ chuỗi có dấu phẩy
function getNumberValue(id) {
          const raw = document.getElementById(id).value.replace(/,/g, "");
          return parseInt(raw) || 0;
        }

document.querySelectorAll("input").forEach(input => {
          input.addEventListener("input", calculateTotal);
        });

window.onload = calculateTotal;