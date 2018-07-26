import react, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import seventh_OrientationPage from './seven_Subjects';
import seven_intnumPage from './seven_intnum';
import seven_reasnumPage from './seven_reasnum';
import seven_percentPage from './seven_percent';
import seven_ratePage from './seven_rate';
import seven_circlePage from './seven_circle';
import seven_equationPage from './seven_equation';
import seven_equation_one_equPage from './seven_equation_one_equ';
import seven_circle_radPage from './seven_circle_rad';
import seven_round_radPage from './seven_round_rad';
import seven_round_areaPage from './seven_round_area';
import seven_rate_strPage from './seven_rate_str';
import seven_rate_revPage from './seven_rate_rev';
const seventh_Orientation = createSwitchNavigator({
    seventh_ori: {
        screen: seventh_OrientationPage,
    },

    seven_intnumPages: {
        screen: seven_intnumPage,
    },
    seven_reasnumPages: {
        screen: seven_reasnumPage,
    },
    seven_percentPages: {
        screen: seven_percentPage,
    },
    seven_ratePages: {
        screen: seven_ratePage,
    },
    seven_circlePages: {
        screen: seven_circlePage,
    },
    seven_equationPages: {
        screen: seven_equationPage,
    },
    seven_equation_one_equPages: {
        screen: seven_equation_one_equPage,
    },

    seven_circle_radPages: {
        screen: seven_circle_radPage,
    },
    seven_round_radPages: {
        screen: seven_round_radPage,
    },
    seven_round_areaPages: {
        screen: seven_round_areaPage,
    },
    seven_rate_strPages: {
        screen: seven_rate_strPage,
    },
    seven_rate_revPages: {
        screen: seven_rate_revPage,
    }
})
export default seventh_Orientation;
