import React from "react";

import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import GlobalNavigationBar from "@salesforce/design-system-react/components/global-navigation-bar";
import GlobalNavigationBarRegion from "@salesforce/design-system-react/components/global-navigation-bar/region";
import GlobalNavigationBarDropdown from "@salesforce/design-system-react/components/global-navigation-bar/dropdown";
import GlobalNavigationBarLink from "@salesforce/design-system-react/components/global-navigation-bar/link";

import Button from "@salesforce/design-system-react/components/button";
import Icon from "@salesforce/design-system-react/components/icon";

import AppLauncher from "@salesforce/design-system-react/components/app-launcher";
import AppLauncherExpandableSection from "@salesforce/design-system-react/components/app-launcher/expandable-section";
import AppLauncherTile from "@salesforce/design-system-react/components/app-launcher/tile";

class GlobalNavBar extends React.Component {
  static displayName = "GlobalNavigationBarExample";

  render() {
    const dropdownCollection = [
      {
        label: "Menu Item One",
        value: "1",
        iconCategory: "utility",
        iconName: "table",
        href: "http://www.google.com",
      },
      {
        label: "Menu Item Two",
        value: "2",
        iconCategory: "utility",
        iconName: "kanban",
        href: "http://www.google.com",
      },
      {
        label: "Menu Item Three",
        value: "3",
        iconCategory: "utility",
        iconName: "side_list",
        href: "http://www.google.com",
      },
    ];

    return (
      <IconSettings iconPath="/assets/icons">
        <GlobalNavigationBar>
          <GlobalNavigationBarRegion region="primary">
            <AppLauncher
              id="app-launcher-trigger"
              triggerName="App Name"
              onSearch={() => {
                console.log("Search term:", event.target.value);
              }}
              modalHeaderButton={<Button label="App Exchange" />}
            >
              <AppLauncherExpandableSection title="Tile Section">
                <AppLauncherTile
                  title="Marketing Cloud"
                  iconText="MC"
                  description="Send emails, track emails, read emails! Emails!"
                />
                <AppLauncherTile
                  title="Call Center"
                  description="The key to call center and contact center is not to use too many words!"
                  descriptionHeading="Call Center"
                  iconText="CC"
                />
              </AppLauncherExpandableSection>
              <AppLauncherExpandableSection title="Small Tile Section">
                <AppLauncherTile
                  title="Journey Builder"
                  iconText="JB"
                  size="small"
                />
                <AppLauncherTile
                  title="Sales Cloud"
                  iconNode={
                    <Icon name="campaign" category="standard" size="large" />
                  }
                  size="small"
                />
              </AppLauncherExpandableSection>
            </AppLauncher>
          </GlobalNavigationBarRegion>
          <GlobalNavigationBarRegion region="secondary" navigation>
            <GlobalNavigationBarLink active label="Home" id="home-link" />
            <GlobalNavigationBarDropdown
              assistiveText={{ icon: "Open menu item submenu" }}
              id="primaryDropdown"
              label="Menu Item"
              options={dropdownCollection}
            />
            <GlobalNavigationBarLink label="Menu Item" />
            <GlobalNavigationBarLink label="Menu Item" />
            <GlobalNavigationBarLink label="Menu Item" />
          </GlobalNavigationBarRegion>
        </GlobalNavigationBar>
      </IconSettings>
    );
  }
}



export default function GlobalNavBar() {
  return <GlobalNavBar />;
}
