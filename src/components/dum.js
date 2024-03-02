function CommentDataforChild({ commentcontent, childauth }) {
    const { LoginJwt } = useStateValue();
    const [userData, setUserData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/user/${childauth}`;
        const projectId = "pvxi7c9s239h";
        try {
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LoginJwt}`,
              projectID: projectId,
            },
          });
  
          const data = await response.json();
          setUserData(data.data);
          Setcreattime(moment(data.createdAt));
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      };
  
      fetchData();
    }, [childauth, LoginJwt]);
    return (
      <>
        <div className="CommentDataDivforchildcomment">
          <div className="commentedUsertracknamelogo">
            <img src={userData.profileImage} />
            {userData && <p>{userData.name}</p>}
            <p>creat time</p>
          </div>
          <p>{commentcontent}</p>
          <div className="divforbuttonincomment">
            <div className="voteUpDownincomment">
              <span className="insideCommentUpVote">⇧</span>
              <p className="likecount">4</p>
              <span className="insideCommentDownVote">⇩</span>
            </div>
            <div className="CommentinsideComment">
              <ChatBubbleOutlineSharpIcon className="iconinreply" />
              <p>Reply</p>
            </div>
            <div className="btnshare">share</div>
            <MoreHorizIcon />
          </div>
        </div>
      </>
    );
  }