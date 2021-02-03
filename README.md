# ThreeAPIs

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Directions & Places</title>
</head>
<body>

	<p>Google Maps Directions API: Ottawa to Montreal</p>
	<a href="url" target="_blank">https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJrxNRX7IFzkwR7RXdMeFRaoo&destination=Montreal&key=AIzaSyA5a1FoKmbmQ1djPh6pRx7oiknBf3ACNOE</a>
	
	<p>Google Maps Places API: Owen Sound</p>
	<a href="url" target="_blank">https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJESNUhYf7KYgRA08xh5wzyIk&fields=name,rating,formatted_phone_number&key=AIzaSyA5a1FoKmbmQ1djPh6pRx7oiknBf3ACNOE</a>
	
</body>
</html>

Owen Sound JSON file:

{
   "html_attributions" : [],
   "result" : {
      "name" : "Owen Sound"
   },
   "status" : "OK"
}



Ottawa to Montreal JSON file:
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJrxNRX7IFzkwR7RXdMeFRaoo",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJDbdkHFQayUwR7-8fITgxTmU",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 45.5652131,
               "lng" : -73.5672184
            },
            "southwest" : {
               "lat" : 45.3020228,
               "lng" : -75.6983291
            }
         },
         "copyrights" : "Map data ©2021 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "198 km",
                  "value" : 198364
               },
               "duration" : {
                  "text" : "2 hours 5 mins",
                  "value" : 7494
               },
               "end_address" : "Montreal, QC, Canada",
               "end_location" : {
                  "lat" : 45.5017123,
                  "lng" : -73.5672184
               },
               "start_address" : "Ottawa, ON, Canada",
               "start_location" : {
                  "lat" : 45.4213651,
                  "lng" : -75.6970503
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 118
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 45.420803,
                        "lng" : -75.6983291
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eAlbert St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa 42\u003c/b\u003e toward \u003cb\u003eO'Connor St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa Regional Rd 87\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qjftGpq_mMXx@vAdE"
                     },
                     "start_location" : {
                        "lat" : 45.4213651,
                        "lng" : -75.6970503
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 187
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 45.4193702,
                        "lng" : -75.69706529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eO'Connor St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa Regional Rd 87\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_gftGpy_mMvBiBdDqC"
                     },
                     "start_location" : {
                        "lat" : 45.420803,
                        "lng" : -75.6983291
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 851
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 149
                     },
                     "end_location" : {
                        "lat" : 45.4232288,
                        "lng" : -75.68764949999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 2nd cross street onto \u003cb\u003eLaurier Ave W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa Regional Rd 48\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a~etGtq_mMg@aB[}@_@iAaA{Ck@kBGWy@mCEOs@{BOa@gAiDW{@Wu@U{@W_AOc@[kA]mAEOEOQi@IUGUQk@So@ACQk@_@qAk@kB"
                     },
                     "start_location" : {
                        "lat" : 45.4193702,
                        "lng" : -75.69706529999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2029
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 137
                     },
                     "end_location" : {
                        "lat" : 45.4170954,
                        "lng" : -75.67078510000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNicholas St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa Regional Rd 95\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "evftGxv}lMdAsAR[P]P_@Pe@Pk@Vw@l@_BFMlAsCv@gB`AuBhAaCPa@Na@l@qApB{ETk@^cAb@wAZgADONo@\\{ANm@F[DMNu@BGBKR_Ab@iBv@gDb@oATi@Pa@N[n@aAr@cAhAaApA_ApA_A\\WVQZQTKLCTAT@F@PFLJJPDLFTDN?B?J@\\?RCRGXIRINOL_@LO@OAWI]SYS[e@gA}Ba@oAEIa@iAMk@Ki@G_@Is@_@qBi@iD"
                     },
                     "start_location" : {
                        "lat" : 45.4232288,
                        "lng" : -75.68764949999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3675
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 133
                     },
                     "end_location" : {
                        "lat" : 45.4220153,
                        "lng" : -75.62478350000001
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-417 E\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "{oetGlmzlMEmB?yDNoEXgFJmAF_A?OBe@D}@Bu@?o@@KAmAAaAEoACaACe@GcAEw@C[AYAWk@}N_@mJCg@AKC_@Ca@CWIgAGi@E_@Go@Ii@Kq@Ow@Mo@Mk@K_@Oe@[iAWaAMe@Og@IUGUGQCOK_@ESESOmAMy@Iq@Gg@Ek@KqAGqAAWIqAC{AUkHU}HC_AGkCCq@[wKi@ySIuB?ECe@QkFKeDIwBEsAG_CEoAC}@A{@OaE]gKKmDa@kFYwCUoBYqBy@yEgCuK"
                     },
                     "start_location" : {
                        "lat" : 45.4170954,
                        "lng" : -75.67078510000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "114 km",
                        "value" : 113944
                     },
                     "duration" : {
                        "text" : "1 hour 2 mins",
                        "value" : 3724
                     },
                     "end_location" : {
                        "lat" : 45.5383526,
                        "lng" : -74.3881145
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-417 E\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Quebec\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "snftGzmqlMOuAMu@k@{COmAMqAIs@Ey@GsAC{@CwAAi@?w@@o@@w@Bu@Ds@Dq@Fs@LaA\\aCT}@No@Ts@`@gAXo@Te@Zk@\\i@^k@d@k@NQf@e@TQ\\YZWPMZSTM`@Qf@SVIVGRGVEj@Kb@Gv@Mz@OvA[`@Gf@Sh@Qh@Qb@On@[h@Wn@a@n@c@d@a@d@_@V[^_@\\_@RWl@w@l@aAp@mAhAeCf@oATw@V}@RaAPw@P{@XuBPiBPwBHgAFgAD_AHcADc@XuCHs@Fa@Hi@DSDU@GHe@Pu@Lk@Ja@La@Le@Pe@Pi@Vm@HQHOLUNYd@w@DG`@m@b@m@\\a@\\_@p@o@VSTSNKBAb@[`@Sp@[b@Sh@Q`@Kb@Md@M|@U~@U^IzA_@|@Up@Uj@Sv@Yr@Yp@[XOVM\\SXOh@]f@]l@a@p@g@x@o@v@s@x@q@^]`@[b@_@r@i@XUd@[b@]d@Yh@[TMZQ^Of@Wd@U^Of@Sh@Q`@Mf@Of@Mh@Kj@Mb@IXEZGb@E\\E\\Cb@Cb@CvAE|A?b@AlA@`B@z@@rA@@?z@@x@@fA?v@?j@?f@Af@Aj@Cn@Cz@GdAMrASpAWlCu@NING`Ae@`Ac@vAw@^UtAy@lAaAbB{A~A}AxBsC\\e@r@iAl@cABEv@yA`AqBv@eBnA}CxAuDJSBG^_A|AyDn@}A\\{@Vk@Vm@t@_Bp@uAr@wAdAiBlAoBb@q@Ze@\\c@l@{@nA}AfBqBhCiCfBcBZYt@s@p@q@bA_Ar@q@~@aAb@e@^c@Za@d@m@\\g@b@o@Vc@Zk@Va@Zm@Te@R_@Nc@Xm@Pc@`AmCj@kB`@{A`@eBX}ATmANgANmALgALqALoAPuBPkB@MN{AH{@H{@BWRyBDe@@Kf@wFb@qELyAN{A?Gh@_G^cEPmBLuAHu@R}BXyCVuC^_ELyAH_Ad@cF`@mENwAZsDVgCB[p@gHfA{LHcA`ByQb@qE?Et@eILwADg@Z_DViCd@mFPqBFg@n@mH~AaQLyAfAyLt@gIT_CXeDb@yEZyD\\cEX_E?CRmCXmEVgEP_DXcFRwDd@kIf@yIl@gKPaDZsFXsEb@iHHoA@GPoCl@{IRaDBWn@sJZiE?EDk@?EXiEr@{JRaDh@_IPkCVeETsD^sHTsEP{CDo@j@mJPoCPoCb@oFLmBPcBRuBJu@T_BPiATyAPaATgARaAPw@XkAPu@Jc@Tu@l@iBl@gBh@sAVo@h@iAN[`BmDhCmF`A{BLWLUj@kApAqC|AcDLWj@kAd@aAt@}AXm@t@_BZm@t@}Af@iAZm@f@gAZo@Xq@r@aBXo@Vs@b@iAVs@^gA`@qAVy@FWFUV{@Ru@ZqAZqA`@aBx@uE@Md@wCf@uDXsCRuBH{@NiCDo@Dm@Do@`@qHLuBHwADy@LeCnAcUh@aJTkE\\{FjBc]ZqFP{CTkEn@eLBUDs@?MT{DHuA`@oHb@{HBe@XwE@MFcAJqBVsEJaBLuBJ}AXmEHgAH}@?MBYX_EViDLcBRcCN_BNeBR_CNeBN}ApAmNNeBj@cGz@kJh@eG^aEp@gHD]XeDZaDPkBr@aIJaAnAiNZgDp@eH^eEj@gGFy@VgC^aEX{CVoCX_DDe@@OHq@BWXcDViCHcATaCXcDJcAJcAFy@JeAPcBb@aFPcBHaAD]TeCN}AJeAZaD\\cDLaAP_BRaBDa@@IVyB`@_DLaARwANaALeAZ{BVcBR{AVeBD_@R{A\\aCPiABSZaCL}@NeAj@}Db@_DF]ZcC\\_CZ{BNiARwAZaC^cDPcBPaBLcBNaBJcBHaBRkDDaBDcABaADcBDiC@eA?_A@eB?cA?cBEiE?gAA_@?QAa@CsCGwHK}MQyT?s@CoBA}ACmDGqGCaDAc@C_FEsEMyNCiECcBAgCA{@?GEkGCgCCgDCeCCiECeC?_B?iBBaA?I@}AHeCHeCLcCPeCLcBNaBV{BR_BR{Al@yD\\kBd@{Bd@qBx@kDNm@BMJ_@d@oBp@oCRy@Ry@\\sAb@mBxAeGPm@f@_Cd@wBf@iCRcANy@P{@N{@TwA^wBT{Ah@uDR{AD[R}AJ}@P{AP{A@KLqAJ{@BYRaCV{CF}@H_AH}AF}@JaBH{AJ_CL}CH}BB{@B}@DaBBaBD_CP_PBsCDyCFqEF{BB}@H_BJ_BJ}AHs@HcAP{AJ}@PuAT{AP_AN}@Ny@Py@Py@Py@No@T}@v@iCTw@La@`@iAJY\\y@Vs@L[Xq@Zo@Zs@Zk@N[LUj@eAz@uAvA{B|A_C|@uA|@uAl@}@l@_A|@sA|@sAz@sA|A_Cz@sA|BkDtAsB`A}AtAuBtAuBzBgD|@sAjAiBn@_A|@uA|@uAn@_Ax@oA~@wAjAeB~@yAl@}@d@u@`@q@l@aAj@cAx@}Ah@gAp@{Ad@iAXq@Vq@Vq@Vu@Tq@Tu@Vw@\\kA\\uA\\qAPw@Pu@VmAVwANy@Lw@N}@PqAL_AFk@BUD[Dc@JgAHy@Fm@JwAHkA@WD_AD}@DaAB{@B}@ByA@}A@yA?{@?sA?a@?MAw@CuAEqACaAEu@MmCa@uHOcBQmCEq@AKIsAC]_@gGQmCM{BOkCQoCMwB?I_@_GWkEO}BKmBIkAAe@IwBEaAEwBC}ACuBA{A?kB?A?E?{BB}ABuB@aAFsBBcAFsAHuB@SBm@@E?CFmAD{@NwBL_BNoBPoBR{BDm@JcAR}BL{AH}@Fs@RmCR{CLoBHaBBk@HkBNkDFyBF{ABuADyC@]BcB@{AB{B?gB?sC?{AAyAA_CEwCC}ACq@?AA{@GsBG_CUiFK}BQyCQsCSqC?AGu@c@qEWwCc@iEa@qDc@iEe@qEc@aEYuC_@oDQwBMuA?GK}AEk@McBOqCG}AG}AIsBGwBEyCE_CGsCE{BE{BGsCEyCKsCG_CEyAE}AI}B?IIoBK{BImBMsCIwAI}A]kG]mFUyCe@iGQoBGq@Go@c@kF_@mEY_DI}AGcAE}AEeACcAAo@A_A?}@A_A@aA@}ABsBBkAJeC?A?EHyAHsAL{ARwBJ}@Jy@J{@RuARsAVwAVsAj@iC\\uAFUPo@@CV{@h@gBb@oAn@eBb@gA~@{Bh@gAh@gAx@yAt@gABET]\\k@lAgB|B}C~BaDn@}@~@mA^c@z@mAz@mAdBeCpAgBn@}@~A{BnAeBt@eAt@aAnAgB|@sAn@eAdAoBj@eAf@cAf@kA`@gA\\u@`@iA`@mAh@aB`@wAf@kBXiAPy@P_ATqALw@TsAT_BNsAD_@D]BSH_APoBJaBDy@Dw@Dq@BcADcBDyC@wBAcAAuAAaACuAIyBI}BKuBKyBKuBIsBOwCKyBIuBKyBKyBIyA?CEw@OqDMuCOsCG}AEw@EeAQoDK{B?KKmBGwAKwBGsAGaBEaAEwAEuACaAEyBEoBAmAAm@AyBA}@A_B?sB@qD@aCB{A@}@ByBDyABsADcADwABaA@GB}@FcBH{ADeAPqCHwAJcBDg@Di@NiBLyAHcAFm@Do@J}@P}AHw@H{@PqAP{ARwAHo@Hg@RwAViB@IJo@L{@`@sCL{@XuBNsAHw@N}AJwANuBFoAF}ABcA@YB_BBuA?uA?}@?yAAyAIgDQaEC{@c@_LQyEQqEKwCKwBG{ACy@IqBEcAGwAC_ACe@UcGSsEOqEGyAK{BAo@AGc@cLSqFMwC?KGoAMqCAWKwBSwD]{F?MSsC[yEACUeD[yDM{AQuBE]MwAa@gE[}CU{B]wCOyAw@qGa@wCQsAi@{DQoAy@oFk@qDW}Am@sD_@sBg@sCUoAc@{BMs@c@yB]gBg@iCi@mCa@wB_@gBa@uBWuA_@iBYwAo@cDUsAa@oBq@gD_@oBq@iDq@iDo@eDu@yDu@oDe@uBi@iC{@cEm@iCk@iCu@eDc@mBm@iCU{@UeASy@Sw@c@iB[qAe@kBSw@cA}Dc@gBq@gCi@qBo@_Cg@mBSs@]oAUw@q@_CMc@Mi@Uu@i@oBsCsJiAuDs@eCUu@i@iB_@mA_BmFq@{Bw@kCi@eBSw@g@kB_@oAQw@[oASu@YqAc@oBYqAa@oBWoAO{@UmAa@wBYiBWwA_@oCg@mDWqBMaAOsAOuAOuAYsCSsBU{BWqCM{AUsBSyBSsBSwBC[YkCQsBi@sFSwBE_@a@kEMsAyAiOc@yE_@uDa@eEI}@kA}La@gEE]Eg@{@{Ia@cEIaACUAMo@wGSwBU}BS{Bk@cGSuBMoAO}AWgCYcDI{@Eq@M_B_@oEOqBOuBO_CMsBMwBIwAMyBMyBGuAIaBGuAIyBGwAIsBGeBEwAE}AE{AEsAAaAC}@CsACaAC}ACyAAy@CyAC_DCwBAsAA{BA{A?cA?qAA{A?{A@yB?{A?cA@qB@{ABcB@qB@{@@gA@_A@u@BeB@}A@}A@_A@}@@yADaD?}B@wCA{AAgAA_AAuAE}BEeBE}AK{CMuCK}BKyAK}AK}AO{AG{@_@yDUyBQyAS_BQwAO_AYoBO{@OaAUyAi@yCq@aDc@sBWkAUaA[sAg@iBg@mBi@kBi@gBUu@i@iBUu@k@iBi@iBu@cCu@cCk@iB_A}Ck@kBiAwDu@eC}@wCw@iC_@oAa@oAiAuDu@eCqAyDcCqIuAsEw@eC_AaDuAoEaBqFUu@AEs@}BSo@Wy@_@mAIY_@oAu@cC_A{Cu@aCmAsDw@yBGQu@mBcB_Ew@eBYm@mAcC{AqCgAkBk@_AyBgDqAcB_BuBsA{AaAiA{B{BkCgCc@]w@o@u@o@w@k@w@k@kAy@y@i@e@]qBqAkAw@}AcAkAu@y@i@y@i@MI_Ak@mAy@iAw@oBuAw@k@m@e@a@]w@m@w@u@_Ay@e@e@_@_@i@m@c@e@i@m@Y[i@o@_AmA_@g@GISWCE_AsAm@_Ac@s@i@}@We@m@eAi@cAo@mA_@{@[o@CEi@mASg@Wm@{@wBQg@eA{CYy@}@qC_BgF{AkFEM[eAg@gBcAwDa@{Ac@_BmA_FGSGYcAcEg@_CMm@?ACKw@kDu@oDQ{@o@{CcA_Fi@iCCQI]w@yDQ_AYmAq@_Dy@mDiA}E?ASy@kAyEMk@ACYmAa@}Au@yC}@gD{@aDcAwDOe@U{@i@gBOi@?AEOKYkA}DoAcEk@gB_@oAqAuDQg@mAoDM]{@aCWu@Qg@ACWs@sB_GeAqCcAoCQe@aD{ISg@M_@o@oBe@yA[eAe@aBK]Om@Oi@g@mBo@kCYoAa@iBUkACI[cB_@mBc@eCSuAIe@W_BQwA_@uCSaBQaBMmAOyAWwCOwBK{AMqBKeBKyBG}AC}@I}BCcA?OCaAE{EC_EAwA@uF@yG?uB?E?wD?{D?_@?q@?KA}AC}A?EAmACcAG}BGyBC_AEs@EeAG}AM{BAOG_AGiAMgBOmBGq@KcASyBUyBOyASyAQwASwAa@oCUsAIg@UwAOu@a@sBYwAOu@c@qBa@aBa@eBo@eC_@sAUu@_@qA]gAY{@_@iAo@mBq@iBq@eBoBcFoBcFwAqDcBkE}B}FiCwGWs@Si@u@iBaAeC{AkDo@wAQa@MYu@_BeAuBkA{BgAoBm@eAy@yAkByCm@_AsAsBa@i@EIsAmBk@s@w@eAc@i@_@e@m@w@g@k@w@}@g@k@y@_Aa@a@iAmAs@s@w@u@u@u@w@s@SQYW_Aw@u@q@{@q@w@m@AAYSEEi@a@s@g@k@a@WO[U_@Ua@U[S[OWMw@a@e@W[Oy@]aAc@EAa@Oi@U_A]iA]w@U}@Uq@QaB]k@Ki@Km@Ku@Is@KkAKkAKaE]YCgBO{CUgAIcCSwBS}@IiAOq@IIAWEc@Gi@IcAQwAYsAYuA]oA[uAa@uAc@w@Yu@Ww@[o@Wc@Q{Aq@cBu@oAq@cB}@{A}@aBeAuByA{@k@iA}@oAaAiAaAyAoA]]gAeAoBsBo@q@_AeAkAuA_BqBgAwA{@gAy@iAaAuAeA_BiAeBiAiB_@o@o@iAi@{@sBwDaAqBs@uA}@mB_AwB}@uB{@qBmBaF}C{HcAgCKWqAeD{@wBcBcE_DiHc@_AoBgEaAsBUg@gBqDeAwBm@kA_@o@_DcGkAsBgB}Cs@mAMQYe@yBoD}@{AmAkB{@qAs@eA]g@mDgFEGcCqDiCwDiC}DeAiBq@kAgAoBgAyBw@cBk@mA_A_CcAiCq@kBm@iBe@wAQo@w@mCg@gBQs@YiAk@aCa@qB]cB?AYyAo@uDYoBSyASuAKcAOqAOsAWkCSiCMaBM}BYeFKkBKoBU}DOgCQiCQ_CWqCQ{AMiAOoAMaAQsAOgAG]W_Bc@cCMw@UkAYwAm@oCe@oBYmAu@mCUy@Sq@m@mBi@aBi@{Am@cBm@_Bs@cBy@kBq@yAAAk@mAaAkBi@aAsA}BgAiBk@}@MQu@gAk@y@u@_A[c@m@u@gAoAm@s@aAeAwAwAaB_By@s@u@q@}@s@u@m@_BuAuBgBu@k@mAgAkAkAa@_@KKy@y@YY}AeBkByB}AiBe@k@u@eAiAaBo@{@uAwBkD}FmA_Cy@_BWi@{@kBcB_Ew@mBq@aBK[eCiHo@kBaBiFY{@_@kAq@uBSq@u@yBgA}CcAiCeAqCg@kA{@oBsA}CkBwD{BkEWc@oBmDYe@EIwBqDkBaDwBaEq@uAaAuB_BwD}@}Bc@qAQg@Yw@Sk@i@gBY{@I]W}@k@wBYgAc@_BWkA_@cBYwA]eBW}AUsAo@gEg@uD_@kD[cDi@eG_@sEe@mFScC[kD_@cEYqCUqB_@sCq@qEaAiG_@qBq@cDi@kCu@{Co@_Ce@iBi@kBY}@Ww@_@kAOe@M_@Qg@?A_@gAa@oAsAmDkAqCy@kBaAwBcBiD_B}C_AkB_B_D_BaDoBgEaBqDaC{FiAwCaBgEu@qBEMs@uBQi@_@kAu@yBq@{Bq@yB]iAa@wA]mA]oA_@uAOi@UaA]uAGUUaA]wAa@eBWmAe@wB[wA[{AWoAWmAYyAk@kCWoAKg@Mm@YuAQy@UcAS{@UaASw@]wA]uAa@wAYeACK_@sAg@eB[aAmCcIqAmDyAsD}AwDgAiCkCmGuAoDi@sASi@_@_Aq@iB]_AYy@_@eA]aAAEMa@[{@Uu@Y{@_@kAg@aBYaAWy@c@_Bc@yA]qA[mAo@aCkA}E}@{DAGq@cDS_AYuAO{@UiAWyA]mB]oBAKWyAYcBkA}Hm@qEe@aDeA}Hm@gEc@}Ce@qD]{Bm@cD[wAi@sBm@uBo@qB}@aC{AiDAE_@q@Ua@Uc@w@oAa@q@GIa@o@c@k@iAwAu@w@UWmCcC_@YsB{Aq@a@q@a@cB{@cBaAiDkBiBaA}BmA_B{@uBkAiBaAwBkAkBcA{EkCeAg@cDiB_Ae@_@UYOiAm@_@Sa@UkAo@wAw@o@_@gE_C}@g@{BoAWOqBiAw@g@YQ{@k@cBgAiAw@]YyB}ACC_@Y{BgBAAyBoBaC_CwCyCe@g@OOMOsA_BOQKK?AY[m@q@[c@KKAAY_@oAwAa@e@Y]AAyBkCiC{CwAeBeBqBs@{@cBoBeAqAyBmCSW[_@kB{BCC}CqDyBmC}DwEcBsBcAoAa@g@[a@WYoAkBkAcBkB}CiBeDuAoCu@aBQ[u@_Bs@cBUi@AAq@aBq@gBq@gB_@gAk@iBa@oAi@iBg@kBc@aBCKK[]qAq@gC}@aD{@cDs@kCaAqDOm@GSi@sBSq@c@cB_AeDi@gBw@cCc@kAs@kBe@gAq@}AcAuBwAiCk@eA}@wA}@uAsAiBmA{AeAkAo@Ya@c@}@}@yC_Do@o@aAcA{EeFcEiEaCeCSSkDsD_CaCoAqAwA}Ac@c@{A}AiAuA_AqA{@wA_@q@g@gA]u@g@kA]_Ae@}Ai@gB_@iBa@uBUsAS}AMiAMuAMmBGyAGeC?CAqB?yAD_B@i@JeCXeDPcBbAkHp@mE|@{Fx@qFl@cEJo@~AwKn@iEF]jAcIp@sEBQdBgLjA_In@kE^aClAkIvAmJNaAl@eEZsB~@oGrA{Iv@oFt@_F|@}FhBiLpFg]`@_CxDiVjAuHF]BQ~@_GnA{H|@oFf@eDxBeNJo@X_BVaB~A}Jz@oFJk@L_AJo@d@yCTwA`AgGhBaLhAcHf@gDZgCTsBRqBB_@RcCNkCNaDPyCJoBL{ADa@P{BNqARgBPwALy@n@qEbBkKZmBd@qCn@_Ed@qCb@oCDWbAiGv@aF\\oBb@oC?Ad@mC?AJo@v@qEvEuYtBoMrAyIPkAnCsPF]\\sBb@oCdCsOb@oCn@_E@Aj@mDDQn@aEb@oCLq@n@{DhCcP~AsJh@eD\\wB"
                     },
                     "start_location" : {
                        "lat" : 45.4220153,
                        "lng" : -75.62478350000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "31.8 km",
                        "value" : 31824
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1073
                     },
                     "end_location" : {
                        "lat" : 45.4030206,
                        "lng" : -74.0666744
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTrans-Canada Hwy E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAutoroute 40 E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ue}tGt|_eMZoBD[RmAJi@Hg@Jg@Jc@FYPq@DOFOJ]La@L]J[\\w@f@cAh@eAj@aAj@w@t@cAf@g@z@y@lAcAVSr@c@\\Q\\O\\Qf@SrBm@nMmD~EuA~Ac@lCu@~Bo@j@OpA_@zAa@n@QzAa@`Cq@jA]jEiA|Ac@j@OtAa@vAa@vHuBxBm@z@WdEkAbEiAfBc@xN}DrA_@rA]hCs@lDiA`AWlAi@fAi@fAm@nA}@~@y@TSb@_@nAuA`@i@j@y@bFaHbFgHdE_GtGcJjD}EfCmD|CgEnDsE|GwIdH}IfHaJbAmAlNiQ~GwIdAsAf@q@pAaBx@cA~@kAtAgBX]x@eAX]@Cv@}@lBeCDGz@eAv@cAV[t@aAnBcCh@q@pAaBX]j@s@DIHKLQJOJOHMJOHMJSDKJSJQJWL[BEHSHUL[L_@Pi@La@Ru@XuA\\_CJs@HgAJeBJ}A@iA?yAQsFYeGi@sL]_H[yHY}FEy@GkAQqDI_BO}CUiFQoD]mHMoCOkD[uGAMKyBcC}h@A[IoACq@GmACu@Cm@?_@C}@?u@?eA@w@?g@D}ABq@Dy@Du@@UFk@Dg@B_@D[Hw@BUDWNaAJw@PaARoAF]@EXgBTsA\\yBFa@TuAb@gC`@cCN_Al@oDl@sD@Cn@yDpBaM?A`B_KJq@d@oCJq@He@FYJg@ZqANm@@CNe@?A?ARq@Vy@n@aB\\{@Xo@Zo@P[Xi@LSDIPY@A^m@Xa@d@m@n@y@j@u@NQNSd@i@nCmD|C}D`@g@LQJMPWzEgGZa@n@w@nAsAn@u@DEb@g@pA_BlA}AfA{AT[b@s@NWTa@Xm@JUL[JU`@gA@AJ[Tu@h@sBXqAZkBRyAReBJ{@Ho@?Ar@_Hb@oDD]Fq@Jy@J}@^iD@ENcBd@eERaB@Gt@_Ht@eHfA{JrAyLLiAnA}Kd@iExB_Sh@_FToBLcAXiBNeAJo@bAkFTeAbAoEjEuQj@cCLi@T}@ZqATeAh@{Bd@eBTaA\\sAd@{A^sAVs@\\gAdA{ClBaFfBoE`BsElAsDX{@`@mAVw@Ng@@CV{@^qAzAoFV}@j@sBdBmGhDcMhAaEv@sC\\mAZcAf@qB|@aDv@wCt@kCRq@J_@j@kBp@mBh@uAXu@p@}Ad@cAt@yA|@eBd@{@Zk@jCuExAiCpA}BxAiCnBeDbBuCxB{D~BcEdAeBdBwCn@gANWdAmBx@wAjA{B`AmB|AyCxBgEtAsC|@cBb@y@pB_EvAoCt@{AVe@~BqE`CyEf@cAnA_Cd@w@v@_B@CPYj@qAj@eA|BsE|A}CP[\\q@^y@`@_ABGZs@Ti@p@_B~@eCf@uADMNc@`@mAHWd@}ANc@Ty@V_An@}Bx@eDLi@^gBTaAP}@VsA\\kBpA{Hl@sDf@wC?Cx@wEpBuLbAgG^{BVaBTsAJu@ZcCTgBFu@Da@H{@RwBJ_BJ_BFmAD{@DaADaADcCBgA@}@@yB?U@kE@eDBqNBmL?O@sCAmBCiC?c@CmACcAEwAEsAKmCMkDA[OkEOoDEmAKaCOoEImBUmGGgBSqFUgGAe@GsBAYAeC?sB@oBFsBHuBH}AJwATeCTsBL_AJo@ZmBVqARaAZuAb@}Ab@yAfAsDxA}EpAgEL_@z@sCbBoFvAyEzC_KdByFX}@dAkDjA{DjCuI^mAvD_MlCyI|@uCtAuEBIdAkDLe@Ni@VaAJc@R}@Lm@N{@RqAXyBNsAL_BHwADiBByAD_DD{DPmN@yAJkLFqGByBByBRoTFoFH_H@u@?k@DwBBmBD}ABeADwADeADiADcADaAHsBF}AFuADiAFyABe@Bu@LyCH_B@SDeAF}AJmBLsBHaAJ_APuATuABEVsAZiAXcAX{@^aATk@^u@\\u@^o@b@s@f@q@rA}AfBoBhAoAjDuDtIkJ^a@d@i@zSiUvC_D`GuGxDyDjBgBjBaBdA}@^[jEkDlHcGtDwCnFmE~E}DvBcBzBiB"
                     },
                     "start_location" : {
                        "lat" : 45.5383526,
                        "lng" : -74.3881145
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 972
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 45.4006195,
                        "lng" : -74.0562882
                     },
                     "html_instructions" : "Take the \u003cb\u003eAutoroute 40 E\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eP.-E. Trudeau Mirabel Airport\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMontréal\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "{wbtGtcacM|CeCb@_@`@a@`@c@Z_@@Cb@m@n@cARa@^u@Re@Zu@`@oADOVaAXuAPeAFe@PuAF}@Fw@Bw@Bm@@g@?O?i@?I?UCyAGwAKwAOwASwA?AYwAYmAk@kB"
                     },
                     "start_location" : {
                        "lat" : 45.4030206,
                        "lng" : -74.0666744
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "33.5 km",
                        "value" : 33494
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1244
                     },
                     "end_location" : {
                        "lat" : 45.5011632,
                        "lng" : -73.66890239999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRoute Transcanadienne E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAutoroute 40 E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{hbtGxb_cMaAmCWs@EKM[O]{@{BeBoE_AcCOa@cDoIqAeDsRcg@cIySaEgKoB_Fc@iAwAuDQg@_DcIqAgDgBsEmA}CmAcDq@mBo@kBo@yBg@cBWiA}@}Ds@qDWyAYqBSsAUiBAGEi@Gg@YwCAGo@_Ji@{Ge@uG?C}AmSWwDWkDu@iJq@iHe@mEa@iFWoCI{@]cESoCAKIkAOoBAKCe@?AMaBAMEc@?IEg@SqCWiDEc@?CM_BCg@KcBQkCI}AGoAEq@C}@MmDOiDCs@AMA]?ECq@KyCCq@Cq@GcB?ACs@GcBGgAMuDGsAEcAIuCG}AUgGAIAg@QkEA[AUGeBCs@Co@Ac@IsBQmEGcB?CCm@Ac@MoDMmCCs@Ag@OmEUcGCu@?Ee@mKEkAOqD?C]sI?AACGmBOwEMaDEmAAg@IoBEyAE}@EgAE}@EmAEkAQ{EIuBAe@AM?SAy@?cB@kBDoBFoBBa@?QDq@R_GVoHR{FBu@d@eNHkBJgCHuB?GBs@?CFaBJwCBs@@W@WBu@NkEBq@LyC?KBe@Bs@R}FLsD^eLRiF@W^kKd@mMJuCRmGNmDBcB@e@?eA?{@CuBAs@Co@?EE}@Eg@Ey@Gi@Ek@K_AIq@M}@YiBAESeAWoAOk@WeAUu@IWEOACK_@]_Ao@_B]w@Wi@{@oBkAoC[q@KUw@gBs@aB_@y@{AiD_CoFmDeIwAcDi@kAm@uA}@sB}AmDaA{BqCmGIUkAkCcEmJ{GoOwAcDwAaDi@qAwAcDuByEQa@iAmCiAiCkAcD_AoCc@sAYcAk@qBi@wBc@kBm@sCy@gEq@iDEYg@uCc@oCOaAKu@c@iDWcBg@qDm@_Ei@sDm@kDWsA]mBeAiFm@kCk@eCgAgESy@c@}AEOa@uAo@wBq@wBkAoDq@mB}@aC}BeGsAeDOa@CGcAkCmA}CgA{CsAcDaDeIuAqDsBkFeJyUUi@_CeGiB{E_DcImBaF{ByFwBsFaCiGaCkG_@_ASq@IUg@_B]iA[mAUeAMg@Ig@Ic@I[QaAOcAM{@Kw@OmAkCqSkBuNkAgJWqBcCgRq@kFu@oFKi@SaAg@eCMk@]wAOk@Ok@Oi@CIAA[eASk@[aAo@eB]{@]}@Yq@cAeCyCmHuBiFCGUi@u@iBs@cB}ByFIUISiBoEUi@yCqHuDeJq@cB}Nk^aO{^_B_EqA{CwAiDeAkCeHoQ_EyJSi@KScAuCgB}E_BeEmJyVISEKeAqCuDuJ[y@yB}FEKCIoEsLKWWq@ISIUqAeDAAISqCoHEM}HkSs@iBq@iBs@iBq@gBmCiHoEkLaCmG[w@{@yBe@sA_@kAe@}AoAoEOk@YiAWmA]gB]kBIk@UyAYoBY_CAKGq@KaAUuCMeBImAGsAIoBEsAEgAC}@GsCEkBIcDEyAOoFKiDGqBGmCSoJ?Ea@aP[kLi@uTIwC?OQsIGaEAeH?a@?eB@q@?[@}B?A@q@@aCLaGPoI@k@Bs@NqGRsIDeBJkE@q@DgBBq@HyCDoBF_CHsDNyG@m@?Ap@yWFgDFiBTmKJsEBaAP}GF}CH{DHaEFkCJkFH_DFuCHoCHsDBkA?mA?aBA_AAs@CmBGuAGu@O{BQqBWcCOmAOcAa@}Bi@mCkAiFqBgJaAuEwAqGi@gCiAgFm@sC[}AOo@eBiIgA{E}@sEm@gDA?QkAWoBSwBSqBK}AK}AYaIA{@CaACeCKeGAiAGqDEaCEaDAg@CmAG{CCgDEoACo@Ac@AUCe@Ee@CSKcAMeAGa@Ii@YyAS}@Qy@Og@Qi@Ka@Oi@Oa@Sg@Se@_@s@a@w@i@_Am@aA}@iAe@k@KOKQQUQWgAwAqAiB}DqFmAaBc@m@mA}AoBoCg@w@"
                     },
                     "start_location" : {
                        "lat" : 45.4006195,
                        "lng" : -74.0562882
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 492
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 45.5017249,
                        "lng" : -73.6638916
                     },
                     "html_instructions" : "Take the \u003cb\u003eAutoroute 15 S\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eAutoroute 10\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMontréal\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCentre-Ville\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePont Champlain\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "g}utGrms`Mc@c@A?ACEECEOUQWQYWa@Wa@OUCAMSQ[O[KWKYK]G[AAG_@E_@C_@Ca@?a@?]Ac@@w@?O@K@KBOD[H[FSDOHQDKJOFIHKBEFKx@s@FIJQ"
                     },
                     "start_location" : {
                        "lat" : 45.5011632,
                        "lng" : -73.66890239999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.3 km",
                        "value" : 5343
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 257
                     },
                     "end_location" : {
                        "lat" : 45.4727751,
                        "lng" : -73.60992
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAutoroute 15 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "w`vtGhnr`MLMx@u@h@e@^_@n@o@Z_@NQRUX]|@mAx@gAT_@Xc@r@oATc@~@cBtBcEbDaGdAmB|E}IbAkBvDaH`@u@^s@BETe@\\q@\\s@Zs@Xo@Ri@Rg@Xy@^kA`@oAb@wAx@sC~@_Db@wAjDwKn@gBp@kBfBmFjBmFl@iBPc@hAcDjAmDtBkGz@eC?An@gBvBoGdDmJxAkEnAsDb@oAb@mAtAaEL_@Pk@lAkD@E~AwERi@|ByG\\_ARk@Pi@z@aCRi@Pk@DMtBiGn@kBTo@Zy@Na@HSPc@NWP]NYP[R[V_@BCT]TYV[\\]h@i@f@c@t@m@@A\\Yt@o@b@]^[JKb@e@bAkA\\i@n@kAv@yAtAoC\\s@NY@Cl@mADIpAoC^cAXs@j@yAf@uAd@wANe@Na@`AmCRk@DML[?APe@Xw@Vu@bA}Ch@aB"
                     },
                     "start_location" : {
                        "lat" : 45.5017249,
                        "lng" : -73.6638916
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3125
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 157
                     },
                     "end_location" : {
                        "lat" : 45.4851586,
                        "lng" : -73.58294049999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e63-E-63-0\u003c/b\u003e on the \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eAutoroute 720 E\u003c/b\u003e toward \u003cb\u003eMontréal\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAirport\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAutoroute 20 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "{kptG~|g`MX{@h@_Bf@yAp@mBh@_B^aA?APk@DOBG`AmCPk@n@kB\\eAZ}@Vy@BEJ_@Pe@Vy@Ro@F]TaAPq@Hi@F_@Ho@Da@D]Dm@Ba@@q@@{@?ECe@?KA[CSAGCSKiAKq@EWACCOQk@I_@Qg@Qi@GQMYM[EKm@iAQYQOk@e@]]AA[Uk@q@_@Ww@e@a@QUKA?m@Sa@Oa@IA?KAS@QCeAYa@Ka@MA?aAYQEQEOGUIME[KEAa@Ma@MMEUIQGOGSGWIy@YOESGWKeAa@}@a@e@Yy@g@w@i@SQKI[Wo@s@a@c@W[CCi@u@EKw@oAS]GMOWWe@gAoBS]U[cCiDEIc@q@OWWc@CEg@w@_AiB[e@wAiCWg@?A_BoCiAsBeAuBcDqGEICIKQAAu@uA[o@g@aAYi@Wg@"
                     },
                     "start_location" : {
                        "lat" : 45.4727751,
                        "lng" : -73.60992
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 871
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 75
                     },
                     "end_location" : {
                        "lat" : 45.4911521,
                        "lng" : -73.57746179999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e3\u003c/b\u003e toward \u003cb\u003eMontréal\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCentre-Ville\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRue Guy\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gyrtGjtb`M?SAOCKYm@y@}AIQa@u@MWa@u@OWIOAACGS_@e@}@]q@ACAAU]AAQUIEEEYQA?CCKGKECAUGIEA?MGGCKGIEGEKI?AA?EEGISYSYmAgBmAiBGISWu@aAMO?AY_@]a@MKEGIEIGWGYGKAC?O?O?O@QDQFQFSJc@ZEFUTSV"
                     },
                     "start_location" : {
                        "lat" : 45.4851586,
                        "lng" : -73.58294049999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1424
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 408
                     },
                     "end_location" : {
                        "lat" : 45.5018118,
                        "lng" : -73.56734449999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBoulevard René-Lévesque O\u003c/b\u003e (signs for \u003cb\u003eRue city\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMontréal\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCentre Ville\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u~stGbra`MsBgB_B_BiC_CqBoBaA}@OO}BuBoCiCaBcB[YiCiCyCoCs@o@wAoAkAgAq@o@QQKK}@y@a@_@IIsCkCuBoBiAaA{CqC"
                     },
                     "start_location" : {
                        "lat" : 45.4911521,
                        "lng" : -73.57746179999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "15 m",
                        "value" : 15
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 45.5017123,
                        "lng" : -73.5672184
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBoulevard Robert-Bourassa\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iavtGzr_`MRW"
                     },
                     "start_location" : {
                        "lat" : 45.5018118,
                        "lng" : -73.56734449999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "qjftGpq_mMpB~F|G{FeDeKwGeTyGcU~@yFlAiDhJeT~J{ZzFkQhKmIrBp@BtCyC`@aFqL{AoJb@_Vb@sJaCsn@sEiVkCqTiEuzAaCei@kIge@Ve_@fLwRfRcFrI}E`IaMvGue@`EoOvL_MfWcIfScOlQmH|Wo@|KCtNeCrOwJvMwR|Wkl@t\\s^`NyY|Fgf@`Yy}Ct\\yqEvTe`D~Qwh@tTae@pLs\\tFo^dBsYjM{}BhFs|@v]{{DnOe}ArSedBmA_`DJyy@xL_t@|Mmo@nFoh@dCqfAfFec@~JsX|a@oo@h_@kk@tOq`@vEg[v@__@kJmpBzGkoAz@ir@eDks@}IkbAqBqz@yHmjAOeb@vGud@lImTrNySn_@si@jNsd@~Byd@qCys@{C}q@Wip@lIwgAfEkh@}CucAsMcbCyO_gAqO{w@_f@{sBoW}|@mLeo@_Y_vC{N{pBo@qwACmp@iGos@uOyo@{\\mhAsV{x@gMe[qSeZqc@s\\kYsU_QiXkTip@s_@}bBqk@ugBuLoh@}Fyp@{BgaB{Hal@iUet@c`@c~@gW{^{UyTkQaKkZqGif@cFqe@mR_d@yc@cc@g|@ud@mbAif@}u@{M}Y}GgVyImu@}Gss@wQcn@yVo`@g_@c]sQqUuQc_@o]q_Au^cu@eNir@uFqn@{I_h@_Rci@{c@qdA}YinAck@k`BuNap@iJso@sIg_@kGsL}N}Ngv@{a@s`@}Tc`@c]{{@udA_Zel@uQmp@wIgXwOwWoo@op@oLyQgFaVg@sUfHal@xXukBxd@{wCzVo~AdGos@hq@afEpOw~@fCuG`K}Llt@mTriAc[fVoKdZw`@n{AkoBb_@_g@|B}Hz@wYqIajBmDmdAfCwUzW}xAhi@_t@~L{WnHko@~SkkBlUw`Ahs@e~BnkAsxBtWmh@hN{b@nRqhA|Cii@e@_jAcDceAbBiY~FsVnk@wkBtF_SxBkTpBwlBnBsh@pAqRvDgNffAgmAv|@qt@tEiIlCwN}Aa[{z@azBcSih@{Ik]sL{wAeGqs@yFmlAcHclB{Bao@hCe`ArHwaCaDaYkN{]wq@o}AaQoa@_Jy]sPybA{W}x@a}@q}BmH}[kV}cBoToj@kvBqoFkg@krAgNyk@mIkcDlHuhD^y{@aXitAgG}^iAqa@{Ash@aJyWuZsa@wEoIGkLfHsIx^ym@pRmb@v`@olAzl@ycB~L_MfSs`@|Yu{@pCyR{BuMyK_LeKeCgJyCaPqL{f@m|@_MiTgPyPcBLoAv@}FyCyU{TkQoPeQkQ"
         },
         "summary" : "Trans-Canada Hwy/ON-417 E and Route Transcanadienne E/Autoroute 40 E",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
