import {FaRegCircle, FaTimes, FaPen} from 'react-icons/fa'
const Icons = ({name}) => {
  
    switch (name) {
        case "Circle":
            return <FaRegCircle />
        case "Cross":
            return <FaTimes />
        default:
            return <FaPen />
    }
  
}

export default Icons
