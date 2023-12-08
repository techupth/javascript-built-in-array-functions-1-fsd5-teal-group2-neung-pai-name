const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(task) {
  // Start coding here
  let newTopic = [];
  todos.map((task) => newTopic.push(task.topic));
  return newTopic;
}

getTodoTopics(todos);

console.log(getTodoTopics(todos));

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
