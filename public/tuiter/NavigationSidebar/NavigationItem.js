const getListItemClass = (activeTab, currentTab) => {
    return `list-group-item list-group-item-action ${(currentTab === activeTab) ? "active" : ""}`;
};
const NavigationItem = (nav, active) => {
    return(`
        <a href="${nav.redirect}" 
           class="list-group-item list-group-item-action ${getListItemClass(active, nav.key)}">
                <i class="${nav.icon}"></i>
                <span class="d-none d-xl-inline">${nav.value}</span>
        </a>
    `);
};

export default NavigationItem;