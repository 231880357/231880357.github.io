                

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

function openFeatureExtract() {

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