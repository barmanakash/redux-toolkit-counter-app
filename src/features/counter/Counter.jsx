import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementValue, setIncrementValue] = useState(2);
    const [isHovered, setIsHovered] = useState({ inc: false, dec: false, amt: false, rst: false });

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            backgroundColor: '#f4f7f6',
            padding: '20px',
        },
        card: {
            background: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            padding: '40px 30px',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
            border: '1px solid #eaeaea',
        },
        heading: {
            color: '#2d3748',
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '8px',
            letterSpacing: '-0.5px',
            fontfamily: 'monospace',
        },
        subHeading: {
            color: '#718096',
            fontSize: '0.875rem',
            marginBottom: '24px',
        },
        counterDisplay: {
            fontSize: '4.5rem',
            fontWeight: '700',
            color: count >= 0 ? '#4f46e5' : '#ef4444',
            margin: '20px 0',
            fontVariantNumeric: 'tabular-nums',
            transition: 'color 0.3s ease',
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '16px',
        },
        btn: {
            padding: '14px 28px',
            fontSize: '1.25rem',
            fontWeight: '600',
            border: 'none',
            borderRadius: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '80px',
        },
        btnIncrement: {
            backgroundColor: '#4f46e5',
            color: '#fff',
            boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
            transform: isHovered.inc ? 'translateY(-2px)' : 'none',
            opacity: isHovered.inc ? 0.9 : 1,
        },
        btnDecrement: {
            backgroundColor: '#e2e8f0',
            color: '#4a5568',
            transform: isHovered.dec ? 'translateY(-2px)' : 'none',
            backgroundColor: isHovered.dec ? '#cbd5e1' : '#e2e8f0',
        },
        btnReset: {
            width: '176px',
            padding: '10px 0',
            fontSize: '0.95rem',
            fontWeight: '600',
            backgroundColor: '#fef2f2',
            color: '#ef4444',
            border: '1px solid #fee2e2',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            margin: '0 auto 32px auto',
            display: 'block',
            boxShadow: isHovered.rst ? '0 4px 12px rgba(239, 68, 68, 0.08)' : 'none',
            backgroundColor: isHovered.rst ? '#fee2e2' : '#fef2f2',
        },
        inputSection: {
            borderTop: '1px solid #edf2f7',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        inputLabel: {
            fontSize: '0.85rem',
            color: '#718096',
            textAlign: 'left',
            fontWeight: '500',
        },
        inputWrapper: {
            display: 'flex',
            gap: '10px',
        },
        input: {
            flex: '1',
            padding: '12px 16px',
            fontSize: '1rem',
            border: '2px solid #e2e8f0',
            borderRadius: '12px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            textAlign: 'center',
            fontWeight: '600',
            color: '#2d3748',
        },
        btnAmount: {
            flex: '2',
            padding: '12px 20px',
            fontSize: '0.95rem',
            fontWeight: '600',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
            opacity: isHovered.amt ? 0.9 : 1,
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Redux Toolkit</h2>
                <p style={styles.subHeading}>Global State Manager</p>

                <div style={styles.counterDisplay}>{count}</div>

                <div style={styles.buttonGroup}>
                    <button
                        style={{ ...styles.btn, ...styles.btnDecrement }}
                        onMouseEnter={() => setIsHovered(prev => ({ ...prev, dec: true }))}
                        onMouseLeave={() => setIsHovered(prev => ({ ...prev, dec: false }))}
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                    <button
                        style={{ ...styles.btn, ...styles.btnIncrement }}
                        onMouseEnter={() => setIsHovered(prev => ({ ...prev, inc: true }))}
                        onMouseLeave={() => setIsHovered(prev => ({ ...prev, inc: false }))}
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                </div>

                <button
                    style={styles.btnReset}
                    onMouseEnter={() => setIsHovered(prev => ({ ...prev, rst: true }))}
                    onMouseLeave={() => setIsHovered(prev => ({ ...prev, rst: false }))}
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>

                <div style={styles.inputSection}>
                    <label style={styles.inputLabel}>Increment Custom Amount</label>
                    <div style={styles.inputWrapper}>
                        <input
                            style={styles.input}
                            type="number"
                            value={incrementValue}
                            onChange={(e) => setIncrementValue(Number(e.target.value))}
                            onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                        <button
                            style={styles.btnAmount}
                            onMouseEnter={() => setIsHovered(prev => ({ ...prev, amt: true }))}
                            onMouseLeave={() => setIsHovered(prev => ({ ...prev, amt: false }))}
                            onClick={() => dispatch(incrementByAmount(incrementValue))}
                        >
                            Add Amount
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}