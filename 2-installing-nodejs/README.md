# Installing Node.js on different platforms

## Windows

1. Download the Windows installer from the [Node.js website](https://nodejs.org/en/download/).
2. Run the installer (the `.msi` file you downloaded in the previous step.)
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
4. Make sure you check the Add to PATH option. It should be selected by default. If you don't select this option, you'll have to update your `PATH` environment variable manually to run `node` from the command line. ![Add to PATH](./images/windows/1.png)
5. You can install the optional tools, but they're not required for this course. ![Optional tools](./images/windows/2.png)
6. Click the install button, and wait for the installation to complete. ![Install](./images/windows/3.png)
7. Open a new command prompt/powershell and verify that Node.js was installed correctly by running the following commands: `node -v` & `npm -v`.
    > You should see something like this, but with a different version number: ![Verify](./images/windows/4.png)
8. You're done! You can now use `node` and `npm` from the command line.

## Mac

1. Download the Mac installer from the [Node.js website](https://nodejs.org/en/download/).
2. Run the installer (the `.pkg` file you downloaded in the previous step.)
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
