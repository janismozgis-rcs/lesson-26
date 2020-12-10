import { useState } from 'react';
import '../Assets/css/tabs.css';

function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    } 
    let tabContent = null;

    if (activeTab === 1) {
        tabContent = <p>This is tab 1</p>
    } else if (activeTab === 2) {
        tabContent = <p>This is tab 2</p>
    } else if (activeTab === 3) {
        tabContent = <p>This is tab 3</p>
    }


    return (
        <div>
            <ul className="tabs-nav">
                <li className={activeTab === 1 ? 'active' : ''}><a href="javascript:;" onClick={() => changeActiveTab(1)}>Tab 1</a></li>
                <li className={activeTab === 2 ? 'active' : ''}><a href="javascript:;" onClick={() => changeActiveTab(2)}>Tab 2</a></li>
                <li className={activeTab === 3 ? 'active' : ''}><a href="javascript:;" onClick={() => changeActiveTab(3)}>Tab 3</a></li>
            </ul>
            <div className="tabs-content">
                {tabContent}
            </div>
        </div>
    );
}

export default Tabs;