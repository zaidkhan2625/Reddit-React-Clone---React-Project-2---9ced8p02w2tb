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
              <MenuItem  className="disable">Valheim</MenuItem>
              <MenuItem className="disable">Genshin Impact</MenuItem>
              <MenuItem className="disable">Minecraft</MenuItem>
              <MenuItem className="disable">Pokimane</MenuItem>
              <MenuItem className="disable">Halo Infinite</MenuItem>
              <MenuItem className="disable">Call Of Duty: Warzone</MenuItem>
              <MenuItem className="disable">Path of Exile</MenuItem>
              <MenuItem className="disable">Hollow Knight: SilkSong</MenuItem>
              <MenuItem className="disable">Escape from Tarkov</MenuItem>
              <MenuItem className="disable">Watch Dogs: Legion</MenuItem>
            </SubMenu>
            <SubMenu icon={<SportsBaseballOutlinedIcon />} label="Sports">
              <MenuItem className="disable">NFL</MenuItem>
              <MenuItem className="disable">NBA</MenuItem>
              <MenuItem className="disable">Megan Anderson</MenuItem>
              <MenuItem className="disable">Atlanta Hawks</MenuItem>
              <MenuItem className="disable">Los Angeles Lakers</MenuItem>
              <MenuItem className="disable">Boston Celties</MenuItem>
              <MenuItem className="disable">Arsenal F.C.</MenuItem>
              <MenuItem className="disable">Philadelphia 76ers</MenuItem>
              <MenuItem className="disable">Premier League</MenuItem>
              <MenuItem className="disable">UFC</MenuItem>
            </SubMenu>
            <SubMenu icon={<SignalCellularAltOutlinedIcon />} label="Business">
              <MenuItem className="disable">GameStop</MenuItem>
              <MenuItem className="disable">Moderna</MenuItem>
              <MenuItem className="disable">Pfizer</MenuItem>
              <MenuItem className="disable">Johnson & johnson</MenuItem>
              <MenuItem className="disable">AstraZeneca</MenuItem>
              <MenuItem className="disable">Walgreens</MenuItem>
              <MenuItem className="disable">Best Buy</MenuItem>
              <MenuItem className="disable">Novavax</MenuItem>
              <MenuItem className="disable">SpaceX</MenuItem>
              <MenuItem className="disable">Tesla</MenuItem>
            </SubMenu >
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
              <MenuItem className="disable">The Real HouseWives of Atlanta</MenuItem>
              <MenuItem className="disable">The Bachelor</MenuItem>
              <MenuItem className="disable">Sister Wives</MenuItem>
              <MenuItem className="disable">90 Day Finance</MenuItem>
              <MenuItem className="disable">Wife Swap</MenuItem>
              <MenuItem className="disable">The Amazing Race Australia</MenuItem>
              <MenuItem className="disable">Married at First Sight</MenuItem>
              <MenuItem className="disable">The Real Housewives of dalllas</MenuItem>
              <MenuItem className="disable">My 600-lb life</MenuItem>
              <MenuItem className="disable">Last Week Tonight with john oliver</MenuItem>
            </SubMenu>
            <SubMenu icon={<StarBorderOutlinedIcon />} label="Celebrity">
              <MenuItem className="disable">Kim kardashian</MenuItem>
              <MenuItem className="disable">Doja Cat</MenuItem>
              <MenuItem className="disable">Lggy Azalea </MenuItem>
              <MenuItem className="disable">Any Taylor-Joy</MenuItem>
              <MenuItem className="disable">Natalie Portman</MenuItem>
              <MenuItem className="disable">Henry Cavil</MenuItem>
              <MenuItem className="disable">Millie Bobby Brown</MenuItem>
              <MenuItem className="disable">Tom Hiddelston</MenuItem>
              <MenuItem className="disable">Keanu Reeves</MenuItem>
            </SubMenu>
            <SubMenu label="Show more">
              <MenuItem className="disable">Animal & Pets</MenuItem>
              <MenuItem className="disable">Anime</MenuItem>
              <MenuItem className="disable">Art</MenuItem>
              <MenuItem className="disable">Cars And Motor Vehicles</MenuItem>
              <MenuItem className="disable">Crafts & DIY</MenuItem>
              <MenuItem className="disable">Culture,Race,And Ethnicity</MenuItem>
              <MenuItem className="disable">Ethics & Philosphy</MenuItem>
              <MenuItem className="disable">Fashion</MenuItem>
              <MenuItem className="disable">Food and Drink</MenuItem>
              <MenuItem className="disable">History</MenuItem>
              <MenuItem className="disable">Hobbies</MenuItem>
              <MenuItem className="disable">Law</MenuItem>
              <MenuItem className="disable">Learning and Education</MenuItem>
              <MenuItem className="disable">Militry</MenuItem>
              <MenuItem className="disable">Movies</MenuItem>
              <MenuItem className="disable">Music</MenuItem>
              <MenuItem className="disable">Place</MenuItem>
              <MenuItem className="disable">poadcat and Streamer</MenuItem>
              <MenuItem className="disable">Politics</MenuItem>
              <MenuItem className="disable">Programming</MenuItem>
              <MenuItem className="disable">Reading Writting and literature</MenuItem>
              <MenuItem className="disable">Religions and Sprituality</MenuItem>
              <MenuItem className="disable">Science</MenuItem>
              <MenuItem className="disable">TableTops Games</MenuItem>
              <MenuItem className="disable">Technology</MenuItem>
              <MenuItem className="disable">Travel</MenuItem>
            </SubMenu>
          </SubMenu>
          <div className="Resources">
            <SubMenu label="Resources">
             <MenuItem className="disable">About reddit</MenuItem>
             <MenuItem className="disable">Adverties</MenuItem>
             <MenuItem className="disable">Help</MenuItem>
             <MenuItem className="disable">Blog</MenuItem>
             <MenuItem className="disable">Careers</MenuItem>
             <MenuItem className="disable">Press</MenuItem>
             <SubMenu className="" label="see more">
              <div className="Resources">
              <MenuItem className="disable">Community</MenuItem>
              <MenuItem className="disable">Best of reddit</MenuItem>
              <MenuItem className="disable">Topics</MenuItem>

              </div>
              <div className="Resources">
              <MenuItem className="disable">Content Policy</MenuItem>
              <MenuItem className="disable">Privacy Policy</MenuItem>
              <MenuItem className="disable">User agreement</MenuItem>

              </div>
             </SubMenu>
            </SubMenu>
            <SubMenu label="POPULAR POST">
            <MenuItem className="disable">English / Gloable</MenuItem>
            <MenuItem className="disable">Deutsch</MenuItem>
            <MenuItem className="disable">Espanol</MenuItem>
            <MenuItem className="disable">Francais</MenuItem>
            <MenuItem className="disable">Italiano</MenuItem>
            <MenuItem className="disable">Portugues</MenuItem>

            </SubMenu>
            
          </div>

        </Menu>
        <p>all right reservs</p>
      </Sidebar>
  );
}

export default HomeComponent;
