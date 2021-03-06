import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions"
import { connect } from "react-redux"
import CurrentScheduleDialog from "./presentation";


const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps =  dispatch => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentScheduleDialog)