import { SET_NEWS_DATA } from "@redux/actions/types"
import { SetNewsAction } from "src/interface/newsDataAction"

const initialState: any = null
type Action = SetNewsAction
const newApiDataReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_NEWS_DATA:
			return action.payload
		default: 
			return state
	}
}

export default newApiDataReducer