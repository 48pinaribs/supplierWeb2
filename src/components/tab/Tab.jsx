import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './Tab.css';

const Tab1 = ({ tabs, onTabClick }) => {
    const [value, setValue] = useState(tabs[0].key);
    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='tab' >
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    {tabs.map((tabbar) => (
                        <Tab
                            key={tabbar.key}
                            label={tabbar.label}
                            onClick={() => onTabClick(tabbar.key)}
                        />
                    ))}
                </Tabs>
            </Box>
        </div>
    );
};

export default Tab1;

