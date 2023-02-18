import {
  AlignTextBoth,
  AlignTextCenter,
  AlignTextLeft,
  AlignTextRight,
  Code,
  H1,
  H2,
  LinkOne,
  ListNumbers,
  ListTwo,
  PictureOne,
  Quote,
  TextBold,
  TextItalic,
  TextUnderline,
  VideoTwo,
} from '@icon-park/react';
import { RichUtils, AtomicBlockUtils } from 'draft-js';
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function EditBarTool({ setEditorState, editorState }) {
  const [toolName, setToolName] = useState('');

  const handleClick = event => {
    // eslint-disable-next-line prefer-const
    let currName = event.currentTarget.className;
    console.log(currName);
    // eslint-disable-next-line prefer-const
    let currArr = event.currentTarget.className.split(' ');
    if (toolName === currName) {
      setToolName('');
    } else {
      setToolName(event.currentTarget.className);
    }

    if (currArr[currArr.length - 1] === 'i-icon-text-bold') {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }
    if (currArr[currArr.length - 1] === 'i-icon-text-italic') {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }
    if (currArr[currArr.length - 1] === 'i-icon-text-underline') {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }
    if (currArr[currArr.length - 1] === 'i-icon-code') {
      setEditorState(RichUtils.toggleBlockType(editorState, 'code-block'));
    }
    if (currArr[currArr.length - 1] === 'i-icon-quote') {
      setEditorState(RichUtils.toggleBlockType(editorState, 'blockquote'));
    }
    if (currArr[currArr.length - 1] === 'i-icon-list-numbers') {
      setEditorState(
        RichUtils.toggleBlockType(editorState, 'ordered-list-item')
      );
    }
    if (currArr[currArr.length - 1] === 'i-icon-list-two') {
      setEditorState(
        RichUtils.toggleBlockType(editorState, 'unordered-list-item')
      );
    }
  };

  return (
    <>
      <div
        className="tools"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '80%',
          height: '6rem',
          backgroundColor: '#ffb769',
          borderRadius: '2rem',
          paddingLeft: '2rem',
          margin: '2rem',
          marginTop: '4rem',
        }}
      >
        <TextBold
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-text-bold' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <TextItalic
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-text-italic' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <TextUnderline
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-text-underline' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <Code
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-code' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <AlignTextLeft
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-align-text-left' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <AlignTextRight
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-align-text-right' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <AlignTextCenter
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={
            toolName === 'i-icon i-icon-align-text-center' ? '#999' : '#333'
          }
          onClick={event => handleClick(event)}
        />
        <AlignTextBoth
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-align-text-both' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <H1
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-h1' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <H2
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-h2' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <LinkOne
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-link-one' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <ListNumbers
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-list-numbers' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <ListTwo
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-list-two' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <Quote
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-quote' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <VideoTwo
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-video-two' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
        <PictureOne
          style={{ margin: '0.6rem' }}
          theme="outline"
          size="24"
          fill={toolName === 'i-icon i-icon-picture-one' ? '#999' : '#333'}
          onClick={event => handleClick(event)}
        />
      </div>
    </>
  );
}
