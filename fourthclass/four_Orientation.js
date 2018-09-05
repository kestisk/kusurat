import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';

import stepAnalysisPage from './stepAnalysisPage';
import Four from './four_subjects';
import naturalNumPage from './naturalNumPage';

import Step_analysis_TabPage from './tabs/step/step_analysis_tab';
import Step_readNumber_TabPage from './tabs/step/step_readNumber_tab';
import Step_astepValue_TabPage from './tabs/step/step_stepValue_tab';

import Roll_TabPage from "./tabs/roll_tab";
import Addlogic_TabPage from "./tabs/logic/logic_addlogic_tab";

import rollingNumberTYS from "./subFolders/rollingNumberTYS";

import measurePage from './measure';
import fractionPage from './fraction';
import decimalFracPage from './decimalFrac';
import logicalPage from './logical';
import Pattern_TabPage from './tabs/pattern_tab';
import Ranking_TabPage from './tabs/ranking_tab';
import Isprob_TabPage from './tabs/prop_isProb_tab';
import four_pattern_numPatternPage from './numPattern';
import probabilityPage from './probability';

import Natural_add_TabPage from './tabs/natural/natural_addPage_tab';
import Natural_mul_TabPage from './tabs/natural/natural_mulPage_tab';
import Natural_div_TabPage from './tabs/natural/natural_divPage_tab';
import Natural_sub_TabPage from './tabs/natural/natural_subPage_tab';

import Frac_named_TabPage from './tabs/frac/frac_named_tab';
import Frac_showInQue_TabPage from './tabs/frac/frac_showInQue_tab';
import Frac_rankingFrac_TabPage from './tabs/frac/frac_rankingFrac_tabs';
import Frac_subFrac_TabPage from './tabs/frac/frac_subFrac_tab';

import Decfrac_decFargRanking_TabPage from './tabs/decFrac/decfrac_decFargRanking_tab';
import Decfrac_decFragComeandComp_TabPage from './tabs/decFrac/decfrac_decFragComeandComp_tab';
import Decfrac_decFragComa_TabPage from './tabs/decFrac/decfrac_decFragComa_tab';

import AddOpin_TabPage from './tabs/logic/logic_sublogic_tab';
import Sublogic_TabPage from './tabs/logic/logic_sublogic_tab';
import Subopin_TabPage from './tabs/logic/logic_subopin_tab';
import Mullogic_TabPage from './tabs/logic/logic_mullogic_tab';
import Mullopin_TabPage from './tabs/logic/logic_mullopin_tab';
import Divlogic_TabPage from './tabs/logic/logic_divlogic_tab';
import Divopin_TabPage from './tabs/logic/logic_divopin_tab';

import Measure_MKAnews_TabPage from './tabs/measure/measure_MKAnews_tab';
import Measure_metre_TabPage from './tabs/measure/measure_metre_tab';
import Measure_time_TabPage from './tabs/measure/measure_time_tab';
import Measure_day_TabPage from './tabs/measure/measure_day_tab';
import Measure_gram_TabPage from './tabs/measure/measure_gram_tab';
import Measure_long_TabPage from './tabs/measure/measure_long_tab';

const four_Orientation = createSwitchNavigator({
    MainFour_Orientation: {
        screen: Four,
    },
    Measure_MKAnews_TabPages: {
        screen: Measure_MKAnews_TabPage,
    },
    Measure_metre_TabPages: {
        screen: Measure_metre_TabPage,
    },
    Measure_time_TabPages: {
        screen: Measure_time_TabPage,
    },
    Measure_day_TabPages: {
        screen: Measure_day_TabPage,
    },
    Measure_gram_TabPages: {
        screen: Measure_gram_TabPage,
    },
    Measure_long_TabPages: {
        screen: Measure_long_TabPage,
    },

    Decfrac_decFragComa_TabPages: {
        screen: Decfrac_decFragComa_TabPage,
    },
    Decfrac_decFragComeandComp_TabPages: {
        screen: Decfrac_decFragComeandComp_TabPage,
    },
    Decfrac_decFargRanking_TabPages: {
        screen: Decfrac_decFargRanking_TabPage,
    },
    Addlogic_TabPages: {
        screen: Addlogic_TabPage,
    },
    AddOpin_TabPages: {
        screen: AddOpin_TabPage,
    },
    Sublogic_TabPages: {
        screen: Sublogic_TabPage,
    },
    Subopin_TabPages: {
        screen: Subopin_TabPage,
    },
    Mullogic_TabPages: {
        screen: Mullogic_TabPage,
    },
    Mullopin_TabPages: {
        screen: Mullopin_TabPage,
    },
    Divlogic_TabPages: {
        screen: Divlogic_TabPage,
    },
    Divopin_TabPages: {
        screen: Divopin_TabPage,
    },
    Frac_named_TabPages: {
        screen: Frac_named_TabPage,
    },
    Frac_showInQue_TabPages: {
        screen: Frac_showInQue_TabPage,
    },
    Frac_rankingFrac_TabPages: {
        screen: Frac_rankingFrac_TabPage,
    },
    Frac_subFrac_TabPages: {
        screen: Frac_subFrac_TabPage,
    },
    Isprob_TabPages: {
        screen: Isprob_TabPage,
    },
    probPage: {
        screen: probabilityPage,
    },
    Natural_add_TabPages: {
        screen: Natural_add_TabPage,
    },
    Natural_sub_TabPages: {
        screen: Natural_sub_TabPage,
    },
    Natural_mul_TabPages: {
        screen: Natural_mul_TabPage,
    },
    Natural_div_TabPages: {
        screen: Natural_div_TabPage,
    },
    stepAnalysisPages: {
        screen: stepAnalysisPage,
    },
    naturalNumPages: {
        screen: naturalNumPage,
    },
    Step_analysis_TabPages: {
        screen: Step_analysis_TabPage,
    },
    Step_readNumber_TabPages: {
        screen: Step_readNumber_TabPage,
    },
    Step_astepValue_TabPages: {
        screen: Step_astepValue_TabPage,
    },
    rollingNumberPages: {
        screen: Roll_TabPage,
    },
    four_roll_closeTenPages: {
        screen: rollingNumberTYS,
    },
    measurePages: {
        screen: measurePage,
    },
    fractionPages: {
        screen: fractionPage,
    },
    decimalFracPages: {
        screen: decimalFracPage,
    },
    logicalPages: {
        screen: logicalPage,
    },
    Pattern_TabPages: {
        screen: Pattern_TabPage,
    },
    Ranking_TabPages: {
        screen: Ranking_TabPage,
    },
    numPatternPages: {
        screen: four_pattern_numPatternPage,
    }

})
export default four_Orientation;