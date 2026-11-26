import React,{useState} from 'react';
import Layout from '@theme/Layout';
export default function Tools(){
 const [v,setV]=useState(12),[r,setR]=useState(6),[amps,setAmps]=useState(5),[length,setLength]=useState(10),[awg,setAwg]=useState('16');
 const resistance={'10':0.000999,'12':0.001588,'14':0.002525,'16':0.004016,'18':0.006385};
 const current=v/r, watts=v*current, drop=2*length*amps*resistance[awg];
 return <Layout title="Electrical Toolbox"><main className="container" style={{maxWidth:900,paddingTop:42,paddingBottom:80}}>
 <h1>Electrical Toolbox</h1><p>Interactive learning calculators for resistive circuits and copper wiring. Values are approximate and are <strong>not</strong> a fuse or wiring safety rating.</p>
 <section className="lab-card"><h2>Ohm’s Law</h2><p>Explore how changing voltage or resistance changes current and power.</p>
 <div className="calc-control"><label>Voltage: {v.toFixed(1)} V</label><input aria-label="Supply voltage" type="range" min="1" max="16" step=".1" value={v} onChange={e=>setV(Number(e.target.value))}/></div>
 <div className="calc-control"><label>Resistance: {r.toFixed(1)} Ω</label><input aria-label="Load resistance" type="range" min=".5" max="30" step=".5" value={r} onChange={e=>setR(Number(e.target.value))}/></div>
 <div className="calc-stats"><div className="calc-stat">Current<strong>{current.toFixed(2)} A</strong></div><div className="calc-stat">Power<strong>{watts.toFixed(1)} W</strong></div></div><p><code>I = V / R</code> and <code>P = V × I</code>.</p></section>
 <section className="lab-card" style={{marginTop:25}}><h2>DC Wire Voltage Drop</h2><p>Assumes stranded copper at approximately 20°C, a two-conductor round trip (source and return), and a steady current. Connector resistance, heating, chassis return paths, bundling, and transients are not included.</p>
 <div className="calc-control"><label htmlFor="amps">Current (A)</label><input id="amps" type="number" min="0" step=".5" value={amps} onChange={e=>setAmps(Math.max(0,Number(e.target.value)||0))}/></div>
 <div className="calc-control"><label htmlFor="length">One-way wire length (ft)</label><input id="length" type="number" min="0" step="1" value={length} onChange={e=>setLength(Math.max(0,Number(e.target.value)||0))}/></div>
 <div className="calc-control"><label htmlFor="awg">Copper wire gauge</label><select id="awg" value={awg} onChange={e=>setAwg(e.target.value)}>{Object.keys(resistance).map(a=><option key={a} value={a}>{a} AWG</option>)}</select></div>
 <div className="calc-stats"><div className="calc-stat">Estimated drop<strong>{drop.toFixed(2)} V</strong></div><div className="calc-stat">At 12V<strong>{(drop/12*100).toFixed(1)}%</strong></div></div>
 <p><strong>Important:</strong> Wire gauge and fuse selection must also consider ampacity, insulation temperature rating, routing, cable bundling, connector limits, short-circuit protection and manufacturer requirements.</p></section>
 </main></Layout>}
