import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
const cards=[
['⚡','Electrical Fundamentals','Start with voltage, current, resistance, multimeters, grounding and safe diagnostics.','/learn/01-electrical-fundamentals/'],
['🚙','2014 F-150 Lab','Explore modern accessory power, BCM-controlled lighting, OBD-II and vehicle networks.','/learn/labs/f150/'],
['🏍️','1997 Sportster Lab','Understand traditional circuits, the stator/regulator and accessory harness design.','/learn/labs/sportster/'],
['📡','Raspberry Pi Lab','Build GPS logs, camera experiments, sensor interfaces and telemetry.','/learn/labs/raspberry-pi/'],
['🧮','Electrical Tools','Experiment with Ohm’s law and voltage-drop approximations.','/tools'],
['📚','12-Week Curriculum','Follow a practical course with labs, outcomes, and checkpoints.','/learn/overview']
];
export default function Home(){return <Layout title="Learn. Build. Experiment." description="Practical vehicle electronics and embedded systems learning"><header className="hero-lab"><div className="container"><span className="hero-tag">AUTOMOTIVE ELECTRONICS · EMBEDDED SYSTEMS</span><h1>Understand the circuit.<br/>Build the thing.</h1><p>A hands-on learning journey across a 2014 F-150, a 1997 Sportster 883 Hugger, and a Raspberry Pi. Go from measuring a battery to building vehicle telemetry.</p><Link className="lab-cta" to="/learn/overview">Explore the 12-week course →</Link><Link className="lab-cta alt" to="/tools">Try the calculators</Link></div></header><main className="container"><div className="lab-grid">{cards.map(([icon,title,desc,path])=><Link to={path} className="lab-card" key={title}><span style={{fontSize:30}}>{icon}</span><h3>{title}</h3><p>{desc}</p><span className="lab-eyebrow">Explore →</span></Link>)}</div><p><strong>Safety first:</strong> Garage Tech Lab starts with current-limited bench experiments and uses manufacturer documentation for vehicle-specific work. No vehicle wiring diagrams or component ratings are assumed.</p></main></Layout>}
