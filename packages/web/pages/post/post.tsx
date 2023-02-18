import CenterLayout from '../../components/layouts/CenterLayout';
import React from 'react';
import { useState } from 'react';
import { Editor, EditorState, AtomicBlockUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './post.module.css';
import EditBarTool from '../../components/fragment/editBarTool';
import { Save, SendOne, Export } from '@icon-park/react';
import { read } from 'fs';

export default function Post() {
  const [editState, setEditState] = useState(() => EditorState.createEmpty());

  const getBlockStyle = blockName => {
    switch (blockName.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';

      default:
        return null;
    }
  };

  const handlePastedFiles = files => {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // CREATE <img /> block
      // const entityKey = editState // from STATE
      //     .getCurrentContent()
      //     .createEntity('image', 'IMMUTABLE', {
      //         src: reader.result,
      //     }).getLastCreatedEntityKey();
      //
      // // NEW EDITOR STATE
      // const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      //     editState,
      //     entityKey,
      //     ' '
      // );
      //
      // // SETSTATE
      // setEditState(newEditorState);

      const contentState = editState.getCurrentContent();

      const contentWithEntity = contentState.createEntity(
        'image',
        'IMMUTABLE',
        { src: 'https://i.stack.imgur.com/7se6r.jpg' }
      );

      const entityKey = contentWithEntity.getLastCreatedEntityKey();

      const newEditorState = EditorState.set(
        editState,
        { currentContent: contentWithEntity },
        'create-entity'
      );

      setEditState(
        AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
      );

      console.log(editState);
    };
  };

  return (
    <>
      <div
        className="container"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          className="page-title"
          style={{ marginTop: '3rem', fontSize: '26px', fontWeight: 550 }}
        >
          <p>博文写作</p>
        </div>
        <div
          className="title"
          style={{
            flex: 1,
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="textarea" style={{ width: '100%' }}>
            <div
              className={styles.titleArea}
              placeholder="在这里输入标题 ..."
              contentEditable="true"
              style={{ height: '80%' }}
            ></div>
          </div>
        </div>
        <div
          className="content"
          style={{
            flex: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <EditBarTool editorState={editState} setEditorState={setEditState} />
          <div className={styles.textArea}>
            {/*<div className={styles.contentArea} placeholder="在这里输入内容 ..." contentEditable="true" style={{ height: "100%"}}></div>*/}
            <Editor
              editorState={editState}
              onChange={setEditState}
              placeholder="Tell a story..."
              blockStyleFn={getBlockStyle}
              handlePastedFiles={handlePastedFiles}
            ></Editor>
          </div>
        </div>
        <div
          className="control"
          style={{
            flex: 1,
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div className={styles.button}>
            <Export
              style={{ marginRight: '1rem' }}
              theme="outline"
              size="20"
              fill="#333"
            />
            <p style={{ margin: 0 }}>导出</p>
          </div>
          <div className={styles.button}>
            <Save
              style={{ marginRight: '1rem' }}
              theme="outline"
              size="20"
              fill="#333"
            />
            <p style={{ margin: 0 }}>保存</p>
          </div>
          <div className={styles.button}>
            <SendOne
              style={{ marginRight: '1rem' }}
              theme="outline"
              size="20"
              fill="#333"
            />
            <p style={{ margin: 0 }}>发送</p>
          </div>
        </div>
      </div>
    </>
  );
}

Post.getLayout = function getLayout(page: React.ReactElement) {
  return <CenterLayout>{page}</CenterLayout>;
};
