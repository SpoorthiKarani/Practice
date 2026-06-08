import { useState } from 'react';

const Tab = ({data}) => {
    console.log(data);
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            {data.map((item, index) => (
                <button key={index} onClick={() => setActiveTab(index)}>{item.label}</button>
            ))}
            <div>
                {data[activeTab]?.content}
            </div>
        </div>
    );
};

export const TabContent = () => {
    const tabsData = [
        { id: 1, label: "Tab 1", content: 'Hey, my name is Spoorthi!'},
        { id: 2, label: "Tab 2", content: 'Im working from 4 years'},
        { id: 3, label: "Tab 3", content: "It's a very hot day"},
    ];

    return (
        <Tab data={tabsData}/>
    )
};