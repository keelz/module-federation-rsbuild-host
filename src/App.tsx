import './App.css';
import RemoteOneButton from 'remote_one/button';
import RemoteTwoButton from 'remote_two/button';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <RemoteOneButton />
      <RemoteTwoButton />
    </div>
  );
};

export default App;
