import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
// 타입스크립트 인터페이스 임포트
import { Todo } from "../App";

// props 타입스크립트 인터페이스 정의
interface Props {
  readonly input: string;
  readonly todos: Todo[];
  readonly onRemove: (id: number) => void;
  readonly onToggle: (id: number) => void;
  readonly onClearAll: () => void;
  readonly onInsert: (input: string) => void;
  readonly onChangeInput: (input: string) => void;
}

// 리덕스 스토어 상태와 스토어 상태 변경 함수를 props로 전달받음
const Todos = ({
                 input,
                 todos,
                 onChangeInput,
                 onInsert,
                 onToggle,
                 onRemove,
                 onClearAll,
               }: Props) => {
  return (
    <div>
      <TodoHeader />
      <TodoInput
        input={input}
        onInsert={onInsert}
        onChangeInput={onChangeInput}
      ></TodoInput>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <TodoFooter onClearAll={onClearAll} />
    </div>
  );
};

export default Todos;