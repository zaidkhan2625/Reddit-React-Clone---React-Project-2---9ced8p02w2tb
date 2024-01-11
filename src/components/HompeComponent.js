import React from "react";
import "../styles/Homecomp.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
function HomeComponent() {
  return (
      <Sidebar className="SiderClass">
        <Menu className="sidebar">
          <div className="subbarpart1">
            <MenuItem icon={<HomeIcon />}>Home</MenuItem>
            <MenuItem>Popular</MenuItem>
          </div>
          <SubMenu label="TOPICS">
            <SubMenu icon={<SportsEsportsOutlinedIcon />} label="game">
              <MenuItem>Valheim</MenuItem>
              <MenuItem>Genshin Impact</MenuItem>
              <MenuItem>Minecraft</MenuItem>
              <MenuItem>Pokimane</MenuItem>
              <MenuItem>Halo Infinite</MenuItem>
              <MenuItem>Call Of Duty: Warzone</MenuItem>
              <MenuItem>Path of Exile</MenuItem>
              <MenuItem>Hollow Knight: SilkSong</MenuItem>
              <MenuItem>Escape from Tarkov</MenuItem>
              <MenuItem>Watch Dogs: Legion</MenuItem>
            </SubMenu>
            <SubMenu icon={<SportsBaseballOutlinedIcon />} label="Sports">
              <MenuItem>NFL</MenuItem>
              <MenuItem>NBA</MenuItem>
              <MenuItem>Megan Anderson</MenuItem>
              <MenuItem>Atlanta Hawks</MenuItem>
              <MenuItem>Los Angeles Lakers</MenuItem>
              <MenuItem>Boston Celties</MenuItem>
              <MenuItem>Arsenal F.C.</MenuItem>
              <MenuItem>Philadelphia 76ers</MenuItem>
              <MenuItem>Premier League</MenuItem>
              <MenuItem>UFC</MenuItem>
            </SubMenu>
            <SubMenu icon={<SignalCellularAltOutlinedIcon />} label="Business">
              <MenuItem>GameStop</MenuItem>
              <MenuItem>Moderna</MenuItem>
              <MenuItem>Pfizer</MenuItem>
              <MenuItem>Johnson & johnson</MenuItem>
              <MenuItem>AstraZeneca</MenuItem>
              <MenuItem>Walgreens</MenuItem>
              <MenuItem>Best Buy</MenuItem>
              <MenuItem>Novavax</MenuItem>
              <MenuItem>SpaceX</MenuItem>
              <MenuItem>Tesla</MenuItem>
            </SubMenu>
            <SubMenu icon={<WbSunnyOutlinedIcon />} label="Crypto">
              <MenuItem>Cardano</MenuItem>
              <MenuItem>Dogecoin</MenuItem>
              <MenuItem>Algorand</MenuItem>
              <MenuItem>Bitcoin</MenuItem>
              <MenuItem>Litecoin</MenuItem>
              <MenuItem>Basic Attention Token</MenuItem>
              <MenuItem>BitcoinCash</MenuItem>
            </SubMenu>
            <SubMenu icon={<ConnectedTvOutlinedIcon />} label="Television">
              <MenuItem>The Real HouseWives of Atlanta</MenuItem>
              <MenuItem>The Bachelor</MenuItem>
              <MenuItem>Sister Wives</MenuItem>
              <MenuItem>90 Day Finance</MenuItem>
              <MenuItem>Wife Swap</MenuItem>
              <MenuItem>The Amazing Race Australia</MenuItem>
              <MenuItem>Married at First Sight</MenuItem>
              <MenuItem>The Real Housewives of dalllas</MenuItem>
              <MenuItem>My 600-lb life</MenuItem>
              <MenuItem>Last Week Tonight with john oliver</MenuItem>
            </SubMenu>
            <SubMenu icon={<StarBorderOutlinedIcon />} label="Celebrity">
              <MenuItem>Kim kardashian</MenuItem>
              <MenuItem>Doja Cat</MenuItem>
              <MenuItem>Lggy Azalea </MenuItem>
              <MenuItem>Any Taylor-Joy</MenuItem>
              <MenuItem>Natalie Portman</MenuItem>
              <MenuItem>Henry Cavil</MenuItem>
              <MenuItem>Millie Bobby Brown</MenuItem>
              <MenuItem>Tom Hiddelston</MenuItem>
              <MenuItem>Keanu Reeves</MenuItem>
            </SubMenu>
            <SubMenu label="Show more">
              <MenuItem>Animal & Pets</MenuItem>
              <MenuItem>Anime</MenuItem>
              <MenuItem>Art</MenuItem>
              <MenuItem>Cars And Motor Vehicles</MenuItem>
              <MenuItem>Crafts & DIY</MenuItem>
              <MenuItem>Culture,Race,And Ethnicity</MenuItem>
              <MenuItem>Ethics & Philosphy</MenuItem>
              <MenuItem>Fashion</MenuItem>
              <MenuItem>Food and Drink</MenuItem>
              <MenuItem>History</MenuItem>
              <MenuItem>Hobbies</MenuItem>
              <MenuItem>Law</MenuItem>
              <MenuItem>Learning and Education</MenuItem>
              <MenuItem>Militry</MenuItem>
              <MenuItem>Movies</MenuItem>
              <MenuItem>Music</MenuItem>
              <MenuItem>Place</MenuItem>
              <MenuItem>poadcat and Streamer</MenuItem>
              <MenuItem>Politics</MenuItem>
              <MenuItem>Programming</MenuItem>
              <MenuItem>Reading Writting and literature</MenuItem>
              <MenuItem>Religions and Sprituality</MenuItem>
              <MenuItem>Science</MenuItem>
              <MenuItem>TableTops Games</MenuItem>
              <MenuItem>Technology</MenuItem>
              <MenuItem>Travel</MenuItem>
            </SubMenu>
          </SubMenu>
          <div className="Resources">
            <SubMenu label="Resources">
             <MenuItem>About reddit</MenuItem>
             <MenuItem>Adverties</MenuItem>
             <MenuItem>Help</MenuItem>
             <MenuItem>Blog</MenuItem>
             <MenuItem>Careers</MenuItem>
             <MenuItem>Press</MenuItem>
             <SubMenu className="" label="see more">
              <div className="Resources">
              <MenuItem>Community</MenuItem>
              <MenuItem>Best of reddit</MenuItem>
              <MenuItem>Topics</MenuItem>

              </div>
              <div className="Resources">
              <MenuItem>Content Policy</MenuItem>
              <MenuItem>Privacy Policy</MenuItem>
              <MenuItem>User agreement</MenuItem>

              </div>
             </SubMenu>
            </SubMenu>
            <SubMenu label="POPULAR POST">
            <MenuItem>English / Gloable</MenuItem>
            <MenuItem>Deutsch</MenuItem>
            <MenuItem>Espanol</MenuItem>
            <MenuItem>Francais</MenuItem>
            <MenuItem>Italiano</MenuItem>
            <MenuItem>Portugues</MenuItem>

            </SubMenu>
            
          </div>

        </Menu>
        <p>all right reservs</p>
      </Sidebar>
  );
}

export default HomeComponent;
