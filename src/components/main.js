import SideBarLeft from './sidebarLeft';
import SideBarRight from './sidebarRight';
import MainMiddleContainer from './MainMiddle';


function Main() {
  return (
    <div className="main-wrap">
      <SideBarLeft />
      <MainMiddleContainer />
      <SideBarRight />
    </div>
  );
}

export default Main;