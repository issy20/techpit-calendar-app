import { connect } from "react-redux"
import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/actions"
import { schedulesAddItem } from "../../redux/schedules/actions"
import AddScheduleDialog from "./presentation"


const mapStateToProps = state => ({ schedule: state.addSchedule })

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog())
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value))
  },
  saveSchedule: schedule => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule }
    } = stateProps
    dispatchProps.saveSchedule(schedule)
  }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog)