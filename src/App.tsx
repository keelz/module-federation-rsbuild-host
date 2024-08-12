import './App.css';
import RemoteOneButton from 'remote_one/button';
import RemoteTwoButton from 'remote_two/button';
import ButtonUsoage from './ButtonUsage';

const App = () => {
  return (
    <div className="content">
      <h1>Module Federation Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <ButtonUsoage />
      <RemoteOneButton />
      <RemoteTwoButton />
    </div>
  );
};

export default App;
