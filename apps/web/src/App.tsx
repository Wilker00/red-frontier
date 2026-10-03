const missionChecklist = [
  'Deliver 20 metal',
  'Deliver 10 ice',
  'Power habitat',
  'Keep rover charge above 20%',
  'Complete within 150 rounds'
];

const logEntries = [
  'Rover A collected metal from deposit 3',
  'Rover B reached charge station',
  'Habitat core is 60% assembled',
  'Warning: low battery on rover B',
  'Transport route recalculated'
];

const resources = {
  metal: 18,
  ice: 6,
  power: 72,
  habitat: 64
};

function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">RF</div>
          <div>
            <p className="eyebrow">Mission Control</p>
            <h1>First Habitat</h1>
          </div>
        </div>

        <div className="topbar-status">
          <div className="status-pill success">Room: RC-42</div>
          <div className="status-pill">2 players online</div>
          <button className="ghost-button">Pause</button>
          <button className="primary-button">Restart</button>
        </div>
      </header>

      <main className="game-layout">
        <aside className="panel left-panel">
          <section>
            <p className="panel-label">Objective</p>
            <h2>Establish habitat and power flow</h2>
          </section>

          <section>
            <p className="panel-label">Checklist</p>
            <ul className="checklist">
              {missionChecklist.map((item, index) => (
                <li key={item} className={index < 3 ? 'done' : ''}>
                  <span className="checkmark">{index < 3 ? '✓' : '○'}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="panel-label">Shared resources</p>
            <div className="resource-grid">
              <div className="resource-card">
                <span>Metal</span>
                <strong>{resources.metal}/20</strong>
              </div>
              <div className="resource-card">
                <span>Ice</span>
                <strong>{resources.ice}/10</strong>
              </div>
              <div className="resource-card">
                <span>Power</span>
                <strong>{resources.power}%</strong>
              </div>
              <div className="resource-card">
                <span>Habitat</span>
                <strong>{resources.habitat}%</strong>
              </div>
            </div>
          </section>
        </aside>

        <section className="world-panel panel">
          <div className="world-header">
            <div className="world-pill">Mars Sector 9</div>
            <div className="world-pill">Round 84</div>
          </div>

          <div className="map-grid" aria-label="Mars map">
            {Array.from({ length: 144 }).map((_, i) => {
              const isBase = i === 10 || i === 11 || i === 22 || i === 23;
              const isCharge = i === 40 || i === 41 || i === 51 || i === 52;
              const isMine = i === 67 || i === 68 || i === 78 || i === 79;
              const isObstacle = i === 30 || i === 31 || i === 87 || i === 96;
              const isRobotA = i === 18 || i === 19;
              const isRobotB = i === 60 || i === 61;

              return (
                <div
                  key={i}
                  className={[
                    'tile',
                    isBase ? 'base' : '',
                    isCharge ? 'charge' : '',
                    isMine ? 'mine' : '',
                    isObstacle ? 'obstacle' : '',
                    isRobotA ? 'robot-a' : '',
                    isRobotB ? 'robot-b' : ''
                  ].join(' ')}
                />
              );
            })}
          </div>
        </section>

        <aside className="panel right-panel">
          <section>
            <p className="panel-label">Editor</p>
            <div className="editor-shell">
              <div className="editor-header">
                <span>roverA.js</span>
                <span className="editor-status">Ready</span>
              </div>
              <pre className="code-block">
{`repeat (5) {
  rover.move("east");
  rover.collect();
  rover.returnToBase();
}`}
              </pre>
            </div>
          </section>

          <section>
            <p className="panel-label">Logs</p>
            <ul className="log-list">
              {logEntries.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="panel-label">Selected rover</p>
            <div className="rover-details">
              <div className="rover-color rover-a" />
              <div>
                <strong>Rover A</strong>
                <div>Battery: 68%</div>
                <div>Cargo: 4 metal</div>
                <div>Task: Return to base</div>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default App;
