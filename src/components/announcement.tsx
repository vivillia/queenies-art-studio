import React, { useState } from "react";
import "./announcement.css";

// Define the interface for the component props
interface AnnouncementProps {
    items: string[];
}

// Rename the component to match the export and use the props interface
const Announcement: React.FC<AnnouncementProps> = ({ items }) => {
    const [index, setIndex] = useState(0);

    // Function to go to the next item
    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Function to go to the previous item
    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="announcement-container">
            <div className="announcement">
                <div className="announcement-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {items.map((item, idx) => (
                        <div className="announcement-item" key={idx}>
                            {item}
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prev} dangerouslySetInnerHTML={{ __html: '&lt;' }} />
                <button className="next" onClick={next} dangerouslySetInnerHTML={{ __html: '&gt;' }} />
            </div>
        </div>
    );
};

export default Announcement;
