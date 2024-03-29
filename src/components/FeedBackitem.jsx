import PropTypes from "prop-types"
import Card from "./shared/Card"

const FeedbackItem = ({item}) => {
  return (
    <Card reverse={true}>
        <div className="num-display">
            {item.rating}
        </div>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem