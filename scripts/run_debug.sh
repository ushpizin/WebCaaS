pushd bundle/
npm run start & disown
popd

python server/app.py
