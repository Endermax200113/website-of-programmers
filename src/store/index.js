import { createStore } from "vuex";

const Modals = Object.freeze({
	Nobody: -1,
	Story: 0,
	Contact: 1,
	Share: 2
});

export default createStore({
	state: {
		Modals,
		modal: Modals.Nobody
	},
	actions: {
		close({state, commit}) {
			commit('setModalWindow', Modals.Nobody);
		}
	},
	getters: {
		getModals(state) {
			return state.Modals;
		}
	},
	mutations: {
		setModalWindow(state, modal) {
			state.modal = modal;
		}
	}
});