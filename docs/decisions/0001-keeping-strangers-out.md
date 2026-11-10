# 0001 · Keeping strangers out without a login

Status: decided, not built yet (the key check arrives in section 6, HTTPS in section 7).

## Why three phones with no login screen still need proof

Backend has no key check. A stranger would be able to look at the location of the other two phones without having to authenticate.

## How the proof travels

Each phone holds its own secret key, and the key is stored in the authorization header because it is set aside exactly for this kind of proof. The backend will reject any request that doesn't have this key or if it's unknown.

## Why only over HTTPS

Someone on the same Wi-Fi would be able to see the entire raw request if it's sent over HTTP, including the secret key. HTTPS stops this by keeping the request secret and also proving who the phone is talking to when the server shows the phone a certificate signed by an authority that the phone trusts

## When a phone is lost

When a phone is lost, its key will be unknown to the backend, so every request it sends will get turned away, and whoever is holding it will see nothing of the family. However, the other two phones will be able to still use the app as normal because the associated keys still exist in the backend.
