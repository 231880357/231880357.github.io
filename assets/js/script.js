                

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.height = "100%";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";            
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("overlay").style.height = "0%";
}

function FEChangeImg(index) {
    const imgList = [
        [
            'assets/img/样例图/SVD/Metal Layer 1/Metal1.png',
            'assets/img/样例图/SVD/Metal Layer 1/imageonline-co-gifimage.gif',
            'assets/img/样例图/SVD/Metal Layer 1/compressed-testImage/Metal1-k=1.png',
            'assets/img/样例图/SVD/Metal Layer 1/compressed-testImage/Metal1-k=2.png',
            'assets/img/样例图/SVD/Metal Layer 1/compressed-testImage/Metal1-k=3.png',
            'assets/img/样例图/SVD/Metal Layer 1/compressed-testImage/Metal1-k=4.png',
            'assets/img/样例图/SVD/Metal Layer 1/compressed-testImage/Metal1-k=5.png',
            '规格：1200*1200',
            '来源：ICCAD2019 Metal Layer数据集',
            '非零奇异值数量：5',
            '无损压缩率：99.17%',
            'k=1','压缩率:99.83%',
            'k=2','99.67%',
            'k=3','99.50%',
            'k=4','99.33%',
            'k=5','99.17%(无损)'
        ],[
            'assets/img/样例图/SVD/Metal Layer 2/metal2.png',
            'assets/img/样例图/SVD/Metal Layer 2/imageonline-co-gifimage.gif',
            'assets/img/样例图/SVD/Metal Layer 2/compressed/Metal2-k=1.png',
            'assets/img/样例图/SVD/Metal Layer 2/compressed/Metal2-k=3.png',
            'assets/img/样例图/SVD/Metal Layer 2/compressed/Metal2-k=6.png',
            'assets/img/样例图/SVD/Metal Layer 2/compressed/Metal2-k=11.png',
            'assets/img/样例图/SVD/Metal Layer 2/compressed/Metal2-k=14.png',
            '规格：1200*1200',
            '来源：ICCAD2012 Metal Layer数据集',
            '非零奇异值数量：14',
            '无损压缩率：97.67%',
            'k=1','压缩率:99.83%',
            'k=3','99.50%',
            'k=6','99.00%',
            'k=11','98.17%',
            'k=14','97.67%(无损)'
        ],[
            'assets/img/样例图/SVD/Metal Layer 3/metal3.png',
            'assets/img/样例图/SVD/Metal Layer 3/imageonline-co-gifimage.gif',
            'assets/img/样例图/SVD/Metal Layer 3/compressed-testImage/Metal3-k=1.png',
            'assets/img/样例图/SVD/Metal Layer 3/compressed-testImage/Metal3-k=2.png',
            'assets/img/样例图/SVD/Metal Layer 3/compressed-testImage/Metal3-k=3.png',
            'assets/img/样例图/SVD/Metal Layer 3/compressed-testImage/Metal3-k=4.png',
            'assets/img/样例图/SVD/Metal Layer 3/compressed-testImage/Metal3-k=5.png',
            '规格：512*512',
            '来源：ICCAD2016 Metal Layer数据集',
            '非零奇异值数量：5',
            '无损压缩率：98.04%',
            'k=1','压缩率:99.61%',
            'k=2','99.21%',
            'k=3','98.83%',
            'k=4','98.44%',
            'k=5','98.04%(无损)'
        ],[
            'assets/img/样例图/SVD/Via 1/via1.png',
            'assets/img/样例图/SVD/Via 1/imageonline-co-gifimage.gif',
            'assets/img/样例图/SVD/Via 1/compressed/via1-k=1.png',
            'assets/img/样例图/SVD/Via 1/compressed/via1-k=5.png',
            'assets/img/样例图/SVD/Via 1/compressed/via1-k=12.png',
            'assets/img/样例图/SVD/Via 1/compressed/via1-k=21.png',
            'assets/img/样例图/SVD/Via 1/compressed/via1-k=41.png',
            '规格：1414*1316',
            '来源：ICCAD2020 Via数据集',
            '非零奇异值数量：41',
            '无损压缩率：93.98%',
            'k=1', '压缩率:99.85%',
            'k=5', '99.27%',
            'k=12', '98.23%',
            'k=21', '96.92%',
            'k=41', '93.98%(无损)'
        ],[
            'assets/img/样例图/SVD/Via 2/via2.png',
            'assets/img/样例图/SVD/Via 2/imageonline-co-gifimage.gif',
            'assets/img/样例图/SVD/Via 2/compressed/via2-k=1.png',
            'assets/img/样例图/SVD/Via 2/compressed/via2-k=4.png',
            'assets/img/样例图/SVD/Via 2/compressed/via2-k=10.png',
            'assets/img/样例图/SVD/Via 2/compressed/via2-k=18.png',
            'assets/img/样例图/SVD/Via 2/compressed/via2-k=34.png',
            '规格：1093*1180',
            '来源：ICCAD2020 Via数据集',
            '非零奇异值数量：34',
            '无损压缩率：94.01%',
            'k=1', '压缩率:99.82%',
            'k=4', '99.29%',
            'k=10', '98.24%',
            'k=18', '96.83%',
            'k=34', '94.01%(无损)',
        ]
    ]
    document.getElementById('FEImg1').src = imgList[index][0];
    document.getElementById('FEImg2').src = imgList[index][1];
    document.getElementById('FEImg3').src = imgList[index][2];
    document.getElementById('FEImg4').src = imgList[index][3];
    document.getElementById('FEImg5').src = imgList[index][4];
    document.getElementById('FEImg6').src = imgList[index][5];
    document.getElementById('FEImg7').src = imgList[index][6];
    document.getElementById('FEText1').innerHTML = imgList[index][7];
    document.getElementById('FEText2').innerHTML = imgList[index][8];
    document.getElementById('FEText3').innerHTML = imgList[index][9];
    document.getElementById('FEText4').innerHTML = imgList[index][10];
    document.getElementById('FEText5').innerHTML = imgList[index][11];
    document.getElementById('FEText6').innerHTML = imgList[index][12];
    document.getElementById('FEText7').innerHTML = imgList[index][13];
    document.getElementById('FEText8').innerHTML = imgList[index][14];
    document.getElementById('FEText9').innerHTML = imgList[index][15];
    document.getElementById('FEText10').innerHTML = imgList[index][16];
    document.getElementById('FEText11').innerHTML = imgList[index][17];
    document.getElementById('FEText12').innerHTML = imgList[index][18];
    document.getElementById('FEText13').innerHTML = imgList[index][19];
    document.getElementById('FEText14').innerHTML = imgList[index][20];
}

function MOChangeImg(index) {
    const imgList = [
        [
            'assets/img/样例图/掩膜优化/Target Pattern 1/mask1.png',
            'assets/img/样例图/掩膜优化/Target Pattern 1/target1.png'
        ],[
            'assets/img/样例图/掩膜优化/Target Pattern 2/mask2.png',
            'assets/img/样例图/掩膜优化/Target Pattern 2/target2.png'
        ],[
            'assets/img/样例图/掩膜优化/Target Pattern 3/mask3.png',
            'assets/img/样例图/掩膜优化/Target Pattern 3/target3.png'
        ],[
            'assets/img/样例图/掩膜优化/Target Pattern 4/mask4.png',
            'assets/img/样例图/掩膜优化/Target Pattern 4/target4.png'
        ],[
            'assets/img/样例图/掩膜优化/Target Pattern 5/mask5.png',
            'assets/img/样例图/掩膜优化/Target Pattern 5/target5.png'
        ],
    ]
    document.getElementById('MOImg1').src = imgList[index][1];
    document.getElementById('MOImg2').src = imgList[index][0];
}

function DDChangeImg1(index) {
    const imgList = [
        [
            'assets/img/样例图/图神经网络/Metal Layer 1/12-nhotstrain_nhsNHSCAD35015.png',
            'assets/img/样例图/图神经网络/Metal Layer 1/12-nhotstrain_nhsNHSCAD35015_graph.png',
            '规格：1200*1200',
            '来源：ICCAD2012 Metal Layer数据集',
            '缺陷检测结果：无缺陷'
        ],[
            'assets/img/样例图/图神经网络/Metal Layer 2/16nhots-9_3593_512_testcase3.png',
            'assets/img/样例图/图神经网络/Metal Layer 2/16nhots-9_3593_512_testcase3_graph.png',
            '规格：512*512',
            '来源：ICCAD2016 Metal Layer数据集',
            '缺陷检测结果：无缺陷'
        ],[
            'assets/img/样例图/图神经网络/Metal Layer 3/19hots-hptid_MX_Benchmark3_clip_hotspot1_28_varnum_110_centercrop.png',
            'assets/img/样例图/图神经网络/Metal Layer 3/19hots-hptid_MX_Benchmark3_clip_hotspot1_28_varnum_110_centercrop_graph.png',
            '规格：1200*1200',
            '来源：ICCAD2019 Metal Layer数据集',
            '缺陷检测结果：有缺陷'
        ],[
            'assets/img/样例图/图神经网络/Via 1/Nvia43021_mb_mb_lccout.png',
            'assets/img/样例图/图神经网络/Via 1/Nvia43021_mb_mb_lccout_graph.png',
            '规格：1121*1397',
            '来源：ICCAD2020 Via数据集',
            '缺陷检测结果：无缺陷'
        ],[
            'assets/img/样例图/图神经网络/Via 2/viahots-Hvia356_mb_mb_lccout.png',
            'assets/img/样例图/图神经网络/Via 2/viahots-Hvia356_mb_mb_lccout_graph.png',
            '规格：1238*1412',
            '来源：ICCAD2020 Via数据集',
            '缺陷检测结果：有缺陷'
        ]
    ]
    document.getElementById('DDImg1').src = imgList[index][0];
    document.getElementById('DDImg2').src = imgList[index][1];
    document.getElementById('DDText1').innerHTML = imgList[index][2];
    document.getElementById('DDText2').innerHTML = imgList[index][3];
    document.getElementById('DDText3').innerHTML = imgList[index][4];
}

function DDChangeImg2(index) {

}