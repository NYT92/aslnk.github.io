# API Documentation

**Available routes**
	
	/login?email=&password=
	
	/login/summary?email=&password=
	
	/login/coins?email=&password=
	
**/login**

To login do this
> /login?email=YOUR_HANIME_EMAIL&password=YOUR_HANIME_PASSWORD

Then The result should be
````
        [
            {
              "env": {
                "vhtv_version": 1643561841140,
                "premium_coin_cost": 4100,
                "mobile_apps": {
                  "code_name": "",
                  "_build_number": 65,
                  "_semver": "3.7.1",
                  "_md5": "7782176b00d550cd2c28cd8ff3f8c3b2",
                  "_url": "https://static-assets.highwinds-cdn.com/apks/htv_app_v3.7.1-7782176b00d550cd2c28cd8ff3f8c3b2.apk"
                }
              },
              "session_token": "Session Token",
              "session_token_expire_time_unix": 1646577951,
              "user": {
                "sign_in_count": 538,
                "id": 2621251,
                "ip": "XX.XX.XX.XXX",
                "slug": "username-0000",
                "email": "example@mail.com",
                "created_at": "2022-02-06T07:05:56.369Z",
                "updated_at": "2022-02-06T14:45:51.949Z",
                "name": "username",
                "identity": "N/A",
                "coins": 0,
                "last_rewarded_ad_clicked_at": "2022-02-06T09:06:23.992Z",
                "alt_subscription_period_start": "2021-10-22T14:55:43.326Z",
                "alt_subscription_period_end": "2022-03-05T15:42:14.202Z",
                "bt_subscription_plan": null,
                "bt_subscription_created_at": null,
                "bt_subscription_ended_at": null,
                "bt_subscription_valid_until": null,
                "is_bt_subscription_recurring": true,
                "video_views": 146,
                "video_views_length": 123758,
                "number": "6969",
                "discord_user_id": null,
                "discord_username": null,
                "discord_avatar_url": null,
                "num_comments": 0,
                "upvotes": 0,
                "downvotes": 0,
                "trust": 0,
                "avatar_url": "https://static-assets-44d.pages.dev/images/default-avatars/58.png",
                "is_admin": false,
                "current_roles": [],
                "alt_premium_status": "Active",
                "bt_premium_status": "Active",
                "is_able_to_access_premium": true,
                "access_level": 0,
                "effective_avatar_url": "https://static-assets-44d.pages.dev/images/default-avatars/58.png"
              },
              "user_setting": {
                "id": 10000,
                "user_id": 10000,
                "is_using_htvmobile_external_player": false,
                "playlist_item_display_mode": 0,
                "images_channels": "[\"media\", \"nsfw-general\", \"furry\", \"futa\", \"yaoi\", \"yuri\", \"traps\", \"irl-3d\"]",
                "primary_color": "#4caf50",
                "preferred_height": 0
              },
              "user_search_option": {
                "id": 10000,
                "user_id": 10000,
                "order_by": "likes",
                "ordering": "desc",
                "tags_match": "all",
                "tags": [
                  HENTAI TAGs
                ],
                "brands": [
                  ALL BRANDs LIST
                ],
                "blacklisted_tags": [
                  Blacklists Tag List
                ]
              },
              "playlists": [
                ALL PLAYLISTs INFO
              ]
            }

        ]
````

**/login/summary**

To get little bit of the important info
> /login/summary?email=YOUR_HANIME_EMAIL&password=YOUR_HANIME_PASSWORD

````
{
  "all_video_views": 147, 
  "avatar": "https://static-assets-44d.pages.dev/images/default-avatars/58.png", 
  "coin": 29734, 
  "email": "example@mail.com", 
  "id": 10000, 
  "name": "username", 
  "premium_status": "Active", 
  "slug": "username-0000"
}
````

**/login/coins**

UNDER CONSTRUCTION

To get a coins from Hanime without installing App
> /login/coins?email=YOUR_HANIME_EMAIL&password=YOUR_HANIME_PASSWORD


````

Soon

````

<br />

# Troubleshootings
If there is any problem with this API, Please email me at admin@aslnk.ml

# Author / Credits
Made By NYT92
