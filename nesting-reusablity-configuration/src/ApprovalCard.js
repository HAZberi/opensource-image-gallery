import React from 'react';

const ApprovalCard = () => {
    return (
        <div className="ui card">
            <div className="content">Are you sure about this??</div>
            <div className="extra content">
                <div class="ui two buttons">
                    <div className="ui basic green button">Accept</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;