document.querySelector('.datetime').defaultValue = Date.now().toLocaleString();

const app = new Vue({
	el: '#app',
	data: {
		tasks: [
			{id: 1, title: 'fix car', deadline: '19.03.2018', done: false, deadlineId: null},
			{id: 2, title: 'shopping', deadline: '20.03.2018', done: true, deadlineId: null},
			{id: 3, title: 'hairdresser', deadline: '18.03.2018', done: false, deadlineId: null},
			{id: 4, title: 'insurance', deadline: '21.03.2018', done: false, deadlineId: null},
		],
		titleText: '',
		filter: '1'
	},
	computed: {
		filteredTasks() {
			switch (this.filter) {
				case ('1'):
					return this.tasks;
				case ('2'):
					return this.tasks.filter(t => t.done);
				case ('3'):
					return this.tasks.filter(t => !t.done);
			}
		},
		filterDone() {
			return this.tasks.filter(t => t.done).length;
		},
		filterUnDone() {
			return this.tasks.filter(t => !t.done).length;
		}
	},
	methods: {
		delTask(id, deadlineId) {
			if (confirm("Delete this task?")) {
				clearTimeout(deadlineId);
				this.tasks = this.tasks.filter(t => t.id !== id);
			}
		},
		
		addTask() {
			let idTask = Date.now();
			let deadlineId = null;
			let message = this.titleText;
			let currentDateTime = new Date();
			let userDateTime = new Date(document.querySelector('.datetime').value);
			if ((!userDateTime.isNaN) && (userDateTime - currentDateTime) > 0) {
				console.log(userDateTime - currentDateTime);
				deadlineId = setTimeout(() => {
					clearTimeout(deadlineId);
					//сделать task.done = !task.done
					this.tasks = this.tasks.filter((t) => {
						if ((t.id === idTask) && (confirm(`It's deadline for this task: " ` + message + '". Mark this task as done?'))) {
							t.done = !t.done;
							t.deadlineId = null;
						}
						return true;
					})
				}, (userDateTime - currentDateTime));
				//*************************************
				this.tasks.push({
					id: idTask,
					title: this.titleText,
					deadline: document.querySelector('.datetime').value,
					done: false,
					deadlineId: deadlineId
				});
			} else {
				alert(`Your date or time isn't correct! Try Again please!`);
				return;
			}
			
			this.titleText = '';
		},
	}
});


