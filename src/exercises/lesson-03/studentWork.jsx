//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from './bugEffectLoop';
import BugMutatedState from './bugMutatedState';
import BugProps from './bugProps';

export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
      <p>Student output will go here</p>
    </div>
  );
}
